function crearTablero() {return{
    Harry: 300,
    Luna: 280, 
    Cedric: 270
}}
let tablero=crearTablero()
console.log(tablero)
function calcularPuntajeTotal(tablero) {
let total=0
for (participante in tablero){
 total+=tablero[participante]
  }return total}
calcularPuntajeTotal(tablero)
console.log(calcularPuntajeTotal(tablero,))
