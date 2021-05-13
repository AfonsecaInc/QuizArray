let arreglo = [1, 500, 230, 40, 4, 65, 28, 32, 45, 1002]

let orden1 = arreglo.sort(function(a, b){return a - b})
console.log(orden1)

let orden2 = arreglo.sort(function(a, b){return b - a})
console.log(orden2)

function eliminarPrimero(){
    orden1.shift()
    console.log("El orden1 sin el primer elemento: " + orden1.toString())
}

function unir(){    
    var unidos = orden1.concat(orden2)
    console.log(unidos)
}

function agregarDatos(){
    orden1.push(85, 65,103,25)
    console.log(orden1)
}