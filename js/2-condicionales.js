/*
if(condicion logica){
    todas las lineas de codigo que quiero si cumple la condicion
} else {
 todas las lineas de codigo que quiero si no se cumple la condicion
}
*/

const numero = parseInt(prompt("ingrese un número"));

if(numero % 2 === 0){
    document.write('El numero ingresado: '+ numero + ' es par')   
}else{
    document.write(`El numero ingresado: ${numero} es impar`)
}