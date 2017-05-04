function Pokemon(nombre, color, poderDeAtaque) {
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;

	this.mostrarPokemon = function() {
		document.write("Hola, soy: " + this.nombre + " y soy de color: " + this.color + "<br>" + "mi poder de ataque es de: " + this.poderDeAtaque + "<br>");
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
Pikachu.atacar(Charmander);
document.write(Charmander.vida);






