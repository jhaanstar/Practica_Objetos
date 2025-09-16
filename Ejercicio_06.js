// Ejercicio 6: Obtener una lista de participantes
function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270
}}
let tablero=crearTablero()
console.log(tablero)
function obtenerParticipantes(tablero) {
    return Object.keys(tablero);}
obtenerParticipantes(tablero,'Harry')
console.log(obtenerParticipantes(tablero,'Harry'))
