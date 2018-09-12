window.onload = () => {
  document.getElementById('fetch-all').onclick = getAllCharacters;

//get all characters from api using axios, return results onto page
  function getAllCharacters() {
    const getResult = document.getElementsByClassName('character-info')

    axios.get('https://ih-crud-api.herokuapp.com/characters')
    .then((response)=>{
      const characterArray = response.data;
      getResult[0].innerHTML = '';
      response.data.forEach((eachThis)=>{
        getResult[0].innerHTML += `
        <div class="char-info">
        <h2>Name: ${eachThis.name}</h2>
        <h3>Occupation: ${eachThis.occupation}</h3>
        <p>Weapon: ${eachThis.weapon}</p>
        </div>
        `
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  //post the value inputs from the user onto the html page
  document.getElementById('send-data').onclick = (e) => {
    e.preventDefault()
    let theName = document.getElementById('name').value
    let theOccupation = document.getElementById('occupation').value
    let theWeapon = document.getElementById('weapon').value
    
    //post must pass two arguments!
    axios.post('https://ih-crud-api.herokuapp.com/characters', {name: theName, occupation: theOccupation, weapon: theWeapon, debt: false})
    .then ((response)=>{
      getAllCharacters();
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  document.getElementById('send-data-two').onclick = (e) => {
    e.preventDefault();
    let theID = document.getElementById('the-id').value

     //post must pass two arguments!
    axios.post('https://ih-crud-api.herokuapp.com/characters', {id: theID})
    /then ((response)=>{
      getAllCharacters();
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  document.getElementById('delete-one').onclick = () => {
    const theIDtwo = document.getElementById('character-id-two').value

    axios.delete('https://ih-crud-api.herokuapp.com/characters/'+theIDtwo, {})
  .then((response)=>{
   
  })
  .catch((err)=>{
    console.log(err);
  })
  }

  document.getElementById('fetch-one').onclick = () => {

    const theClassYeah = document.getElementById('fetch-one-yeah').value
    const theResultDiv = document.getElementsByClassName('character-info')
  
    axios.get('https://ih-crud-api.herokuapp.com/characters/'+theClassYeah, {})
    .then((response)=>{
    console.log(response)
      getResult.innerHTML += `
      <div class="char-info">
      <h2> Name:  ${getResult.name} </h2>
      <h5> Occupation: ${getResult.occupation} </h5>
      <p> Weapon: ${getResult.weapon} </p>
      </div>
      `
    })
    .catch((err)=>{
      console.log(err);
    })
    }


}