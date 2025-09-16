// Ejercicio 4: Actualizar el puntaje de un participante
function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270}}
let tablero=crearTablero()
console.log(tablero)
function actualizarPuntaje(tablero, nombre, nuevosPuntos) {
tablero[nombre]=nuevosPuntos
}
actualizarPuntaje(tablero,'Luna',300)
console.log(tablero)
