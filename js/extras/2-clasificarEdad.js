/*Clasificación de Edad
Escribe un programa que pida al usuario ingresar su edad y, utilizando switch y condicionales, clasifique al usuario en una de las siguientes categorías: "Niño", "Adolescente", "Adulto" o "Adulto Mayor".

Niño: 0-12 años
Adolescente: 13-18 años
Adulto: 19-59 años
Adulto Mayor: 60 años en adelante
*/

let edad = parseInt(prompt("Ingresa tu edad:"));

switch (true) {
  case (edad >= 0 && edad <= 12):
    alert("Eres un Niño.");
    break;
  case (edad >= 13 && edad <= 18):
    alert("Eres un Adolescente.");
    break;
  case (edad >= 19 && edad <= 59):
    alert("Eres un Adulto.");
    break;
  case (edad >= 60):
    alert("Eres un Adulto Mayor.");
    break;
  default:
    alert("Edad no válida.");
}