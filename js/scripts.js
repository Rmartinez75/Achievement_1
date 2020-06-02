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

  //Function to log the pokemon to console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
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
        item.types = [];
        //Iterates through types array and pushes to item.types array
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }

        //Iterates through abilities array and pushes to item.abilities array
        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
        }

        item.weight = details.weight;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  //Creates the Modal and all funcionality
  function showModal(pokemon) {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.innerHTML = '';

    //Creates div tag in DOM
    var modal = document.createElement('div');
    modal.classList.add('modal');

    //Creates the close button and gives it functionality
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'close';
    closeButtonElement.addEventListener('click', hideModal);

    //Creates h1 tag in DOM and inputs pokemon name as text
    var nameElement = document.createElement('h1');
    nameElement.innerText = pokemon.name;

    //Creates img tag in DOM and puts in pokemon img
    var imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.setAttribute('src', pokemon.imageUrl);

    //Creates a paragraph tag in DOM for the height
    var heightElement = document.createElement('p');
    heightElement.innerText = 'Height: ' + pokemon.height;

    //Creates a paragraph tag in DOM for the weight
    var weightElement = document.createElement('p');
    weightElement.innerText = 'Weight: ' + pokemon.weight;

    //Creates a paragraph tag in DOM for the type
    var typesElement = document.createElement('p');
    typesElement.innerText = 'Types: ' + pokemon.types;

    //Creates a paragraph tag in DOM for the abilities
    var abilitiesElement = document.createElement('p');
    abilitiesElement.innerText = 'Abilities: ' + pokemon.abilities;

    //Puts elemenst into div
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(typesElement);
    modal.appendChild(abilitiesElement);
    $modalContainer.appendChild(modal);
    //Adds class to show the modal
    $modalContainer.classList.add('is-visible');
  }

  //Hides modal when click close button
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  //Hides modal when click ESC
  window.addEventListener('keydown', (e) => {
    var $modalContainer = document.querySelector('#modal-container');
    if (
      e.key === 'Escape' &&
      $modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }
  });

  //Hides modal if clicked outside of it
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', (e) => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

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
