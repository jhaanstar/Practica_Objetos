// Ejercicio 5: Multiplicar los puntos de un participante
function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270
}}
let tablero=crearTablero()
console.log(tablero)
function actualizarPuntaje(tablero, nombre) {
tablero[nombre]= tablero[nombre]*1.5}
actualizarPuntaje(tablero,'Harry')
console.log(tablero)
