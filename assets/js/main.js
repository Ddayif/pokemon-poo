function Pokemon(nombre, color, poderDeAtaque) {
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function() { // imprime la informacion en el html
		document.getElementById("pokemon").innerHTML += ("Hola, soy: " + this.nombre + " y soy de color: " + this.color + "<br>" + "Mi poder de ataque es de: " + this.poderDeAtaque + "<br>" + "<br>");
	}
  
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}

const Pikachu = new Pokemon("Pikachu", "amarillo", 100);
Pikachu.mostrarPokemon(); 
  
const Charmander = new Pokemon("Charmander", "rojo", 20);
Charmander.mostrarPokemon();

Pikachu.atacar(Charmander);
document.write(Charmander.vida);







