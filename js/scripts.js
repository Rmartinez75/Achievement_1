//List of pokemon with some of their attributes using an IIFE
var pokemonRepository = (function () {
  var pokemonList = [
    { name: 'Pikachu', height: 3, types: ['Flying', 'Steel', 'Electric'] },
    { name: 'Pidgeot', height: 3, types: ['Rock', 'Ice', 'Grass'] },
    { name: 'Mewtwo', height: 7, types: ['Ghost', 'Fighting', 'Psychic'] },
    { name: 'Charizard', height: 6, types: ['Rock', 'Ground', 'Fire'] },
  ];

  function add(item) {
    if (typeof item === 'object') {
      pokemonList.push(item);
    } else {
      document.write('This is not a Pokemon!');
    }
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

//Loops over the pokemonRepository with forEach method using getAll() function thats in the IIFE. Then checks if the data thats being input is an object, then writes onto DOM along with height
pokemonRepository.getAll().forEach(function (pokemon) {
  var tall;
  if (pokemon.height > 3) {
    tall = "--Wow that's tall!--";
  } else {
    tall = '--Too short!--';
  }

  document.write(
    '<div class="container">' +
      '** ' +
      pokemon.name +
      ' **' +
      '<br>' +
      'Height: ' +
      pokemon.height +
      '<br>' +
      tall +
      '</div>'
  );
});
