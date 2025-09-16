// Ejercicio 7: Encontrar al participante con el mayor puntaje
function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270
}}
let tablero=crearTablero()
console.log(tablero)//{ Harry: 300, Luna: 280, Cedric: 270 }
function encontrarMayorPuntaje(tablero) {
let datos=[null,0]
for (participante in tablero){
  if (tablero[participante]>datos[1]) {
    datos[1]=tablero[participante]
    datos[0]=participante
  }}return datos[0]}
encontrarMayorPuntaje(tablero,)
console.log(encontrarMayorPuntaje(tablero,))
