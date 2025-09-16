// Ejercicio 3: Remover a un participante del tablero
function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270
}}
let tablero=crearTablero()
console.log(tablero)
function removerParticipante(tablero, nombre) {
delete tablero[nombre]
}
removerParticipante(tablero,'Cedric')
console.log(tablero)
