//List of pokemon with some of their attributes using an IIFE
var pokemonRepository = (function () {
  var pokemonList = [
    { name: 'Pikachu', height: 3, types: ['Flying', 'Steel', 'Electric'] },
    { name: 'Pidgeot', height: 3, types: ['Rock', 'Ice', 'Grass'] },
    { name: 'Mewtwo', height: 7, types: ['Ghost', 'Fighting', 'Psychic'] },
    { name: 'Charizard', height: 6, types: ['Rock', 'Ground', 'Fire'] },
  ];

  //Function to validates wether item is an object. If so adds to array
  function add(item) {
    if (typeof item === 'object') {
      pokemonList.push(item);
    } else {
      document.write('This is not a Pokemon!');
    }
  }

  //Funtion to return pokemonList
  function getAll() {
    return pokemonList;
  }

  //Function to display the array of pokemon onto the DOM as buttons
  function addListItem(pokemon) {
    var character = document.querySelector('.character-list');
    var listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('character-name');
    listItem.appendChild(button);
    character.appendChild(listItem);
    clickDisplayName(button, pokemon);
  }

  //Function to log the pokemon to console
  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  //Function to add an event listner to button which displays the pokemon on console after clicking
  function clickDisplayName(button, pokemon) {
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

//forEach loop that iterates over the pokemonRepository showing what the functions can do on the DOM
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
