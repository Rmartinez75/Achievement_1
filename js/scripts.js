//List of pokemon with some of their attributes
var pokemonList = [
  { name: 'Pikachu', height: 3, types: ['Flying', 'Steel', 'Electric'] },
  { name: 'Mewtwo', height: 7, types: ['Ghost', 'Fighting', 'Psychic'] },
  { name: 'Pidgeot', height: 3, types: ['Rock', 'Ice', 'Grass'] },
  { name: 'Charizard', height: 6, types: ['Rock', 'Ground', 'Fire'] },
];

//Loops over the pokemonList with forEach method then writes onto DOM along with height
pokemonList.forEach(function (pokemon) {
  if (pokemon.height > 3) {
    document.write(
      '<p>' +
        '** ' +
        pokemon.name +
        ' **' +
        '<br>' +
        'Height: ' +
        pokemon.height +
        " -- Now he's tall!" +
        '</p>'
    );
  } else {
    document.write(
      '<p>' +
        '** ' +
        pokemon.name +
        ' **' +
        '<br>' +
        'Height: ' +
        pokemon.height +
        '</p>'
    );
  }
});
