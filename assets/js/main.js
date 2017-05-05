/*function validar(){
	function opciones(){// valida que el pokemon elegido
		var seleccionarPokemon = document.getElementsByClassName("form-control");
		var seleccionarPokemon2 = document.getElementsByClassName("form-con")
		for(var i = 0; i < seleccionarPokemon.length; i++){
			if(seleccionarPokemon[i].value == seleccionarPokemon2[i].value){
				alert("No debes seleccionar al mismo Pokemon para pelear");
			}
			}
		}
	}
	opciones();

}*/
	function Pokemon(nombre, color, poderDeAtaque) {
		this.nombre = nombre;
		this.color = color;

		this.nivelDeAmistad = 0;

		this.vida = 100;
		this.poderDeAtaque = poderDeAtaque;

	/*this.mostrarPokemon = function() { // imprime la informacion en el html
		document.getElementById("pokemon").innerHTML += ("Hola, soy: " + this.nombre + " y soy de color: " + this.color + "<br>" + "Mi poder de ataque es de: " + this.poderDeAtaque + "<br>" + "<br>");
	}*/

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}
function pelear(){
	var primerPokemon = document.getElementById("pokemon1").value;
	var segundoPokemon= document.getElementById("pokemon2").value;

	if(primerPokemon == segundoPokemon){
		alert("No debes seleccionar al mismo Pokémon para pelear");
	return
	}
	var pokemonAtacante = new Pokemon(primerPokemon, "color", 50);
	var pokemonAtacado = new Pokemon(segundoPokemon, "color", 10);
	pokemonAtacante.atacar(pokemonAtacado);
	document.getElementById("pokemoncillo").innerHTML += (pokemonAtacante.nombre + " atacó a " + pokemonAtacado.nombre + " y " + pokemonAtacado.nombre + " tiene una vida de " + pokemonAtacado.vida);
}

/*const Pikachu = new Pokemon("Pikachu", "amarillo", 100);
Pikachu.mostrarPokemon(); 

const Charmander = new Pokemon("Charmander", "rojo", 20);
Charmander.mostrarPokemon();

const Poliwag = new Pokemon("Poliwag", "celeste", 50);
Poliwag.mostrarPokemon();

const Ponyta = new Pokemon("Ponyta", "blanco", 100);
Ponyta.mostrarPokemon(); 

const Abra = new Pokemon("Abra", "amarillo", 100);
Abra.mostrarPokemon(); 

const Machoke = new Pokemon("Machoke", "celeste", 70);
Machoke.mostrarPokemon(); 

const Snorlax = new Pokemon("Snorlax", "azul", 100);
Snorlax.mostrarPokemon(); */











