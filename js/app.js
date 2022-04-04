var jugador;
var computadora;

jugador = prompt("Ingrese piedra, papel o tijera:", "");
computadora = "piedra";


function game (jugador, computadora){
  if(jugador === computadora) {
    document.write("Es un empate");
  }

  else if (jugador === "piedra" && computadora === "papel" || jugador === "papel" && computadora === "tijera" || jugador === "tijera" && computadora === "piedra") {
    document.write("La computadora ganó");
  }

  else if (jugador === "piedra" && computadora === "tijera" || jugador === "papel" && computadora === "piedra" || jugador === "tijera" && computadora === "papel") {
    document.write("Ganaste");
  }

  else {
    document.write("Ingresa una opcion válida");
  }

}

game(jugador, computadora);
