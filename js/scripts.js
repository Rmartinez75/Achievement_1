//List of pokemon with some of their attributes using an IIFE
var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //Function to validates wether item is an object. If so adds to array
  function add(item) {
    if (typeof item === 'object') {
      pokemonList.push(item);
    } else {
      console.log('This is not a Pokemon!');
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

  //Function to retrieve info from API then load into pokemonList array
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Function breaks down details in the pokemonList to display specific things
  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Function to log the pokemon to console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  //Function to add an event listner to button which displays the pokemon on console after clicking
  function clickDisplayName(button, pokemon) {
    button.addEventListener('click', function (event) {
      showDetails(pokemon);
    });
  }

  //Returns all functions
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

//Function that uses forEach loop to iterate over the pokemonRepository and display the pokemon list onto DOM then when a name is clicked it logs details to console
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
