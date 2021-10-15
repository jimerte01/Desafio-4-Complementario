let numeroUno = Number(prompt("Escriba un numero"))
let numeroDos = Number(prompt("Escriba un segundo numero"))
function promedio(numeroUno, numeroDos){
    let suma = numeroUno + numeroDos;
    let promedio = suma / 2;
    alert("La suma de sus 2 numeros es:  " + suma + "   Y su promedio:  " + promedio)
}
promedio(numeroUno, numeroDos)