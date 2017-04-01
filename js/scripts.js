$(document).ready(function() {
  $("form#pokemon").submit(function(event) {
    event.preventDefault();

    var pokemon = $("#selectPokemon").val();
    // console.log(pokemon);

    $(".choose").show();

    if(pokemon === "Bulbasaur") {
      $("#bulbasaur").show();
      $("#charmander").hide();
      $("#squirtle").hide();
    } else if(pokemon === "Charmander") {
      $("#charmander").show();
      $("#bulbasaur").hide();
      $("#squirtle").hide();
    } else {
      $("#squirtle").show();
      $("#bulbasaur").hide();
      $("#charmander").hide();
    }
  });
});
