//List of pokemon with some of their attributes
var pokemonList = [
  { name: "Pikachu", height: 3, types: ["Flying", "Steel", "Electric"] },
  { name: "Mewtwo", height: 7, types: ["Ghost", "Fighting", "Psychic"] },
  { name: "Pidgeot", height: 3, types: ["Rock", "Ice", "Grass"] },
  { name: "Charizard", height: 6, types: ["Rock", "Ground", "Fire"] },
];

//Loops over the pokemonList then writes onto DOM along with height
for (i = 0; i < pokemonList.length; i++) {
  if (pokemonList[i].height > 3) {
    document.write(
      "<p>" +
        "** " +
        pokemonList[i].name +
        " **" +
        "<br>" +
        "Height: " +
        pokemonList[i].height +
        " -- Now he's tall!" +
        "</p>"
    );
  } else {
    document.write(
      "<p>" +
        "** " +
        pokemonList[i].name +
        " **" +
        "<br>" +
        "Height: " +
        pokemonList[i].height +
        "</p>"
    );
  }
}
