// Ejercicio 2: Añadir un nuevo participante con un puntaje inicial
function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270
}}
let tablero=crearTablero()
console.log(tablero)

function agregarParticipante(tablero, nombre, puntos) {
 tablero[nombre] = puntos;
    return tablero;}
agregarParticipante(tablero,"Clarisse",260)
console.log(tablero)
