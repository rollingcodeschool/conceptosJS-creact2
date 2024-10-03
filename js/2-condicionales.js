/*
if(condicion logica){
    todas las lineas de codigo que quiero si cumple la condicion
} 
*/

// const numero = parseInt(prompt("ingrese un número"));

// if(numero % 2 === 0){
//     document.write('El numero ingresado: '+ numero + ' es par')
// }else{
//     document.write(`El numero ingresado: ${numero} es impar`)
// }

//Ejercicio 2

//Solicitar al usuario su edad e informar si esta obligado a votar o no
//16-17 o mayores de 70: puedes votar (optativo)
//18-70: Estoy obligado a votar

const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 1 && edad <= 105) {
  //aqui continuo con el programa
  console.log("aqui sigo con mi programa");
  if ((edad >= 16 && edad <= 17) || edad > 70) {
    document.write("Es optativo que votes");
  } else if (edad >= 18 && edad <= 70) {
    document.write("Es obligatorio votar");
  } else {
    document.write("No peudes votar");
  }
} else {
  alert("Ingresaste un valor invalido");
}
