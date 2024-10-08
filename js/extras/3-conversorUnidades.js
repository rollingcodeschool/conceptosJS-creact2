/*Conversor de Unidades de Longitud
Crea un programa que convierta una medida de longitud ingresada por el usuario. El programa debe solicitar al usuario que ingrese una cantidad en metros y luego elija una opción para convertirla a kilómetros, centímetros, milímetros o pulgadas. Usa switch para manejar las conversiones.*/

let metros = parseFloat(prompt("Ingresa la cantidad en metros:"));
let opcion = parseInt(prompt("Elige una opción para convertir:\n1. Kilómetros\n2. Centímetros\n3. Milímetros\n4. Pulgadas"));

switch (opcion) {
  case 1:
    alert(metros + " metros son " + (metros / 1000) + " kilómetros.");
    break;
  case 2:
    alert(metros + " metros son " + (metros * 100) + " centímetros.");
    break;
  case 3:
    alert(metros + " metros son " + (metros * 1000) + " milímetros.");
    break;
  case 4:
    alert(metros + " metros son " + (metros * 39.3701) + " pulgadas.");
    break;
  default:
    alert("Opción no válida.");
}