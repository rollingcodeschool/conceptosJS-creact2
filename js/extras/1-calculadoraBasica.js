/*Calculadora Básica
Crea un programa que funcione como una calculadora básica. El programa debe pedir al usuario que ingrese dos números y luego que elija una operación entre suma, resta, multiplicación o división. Usa switch para realizar la operación correspondiente y mostrar el resultado al usuario.*/

let numero1 = parseFloat(prompt("Ingresa el primer número:"));
  let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
  let operacion = prompt("Elige la operación (+, -, *, /):");

  switch (operacion) {
    case "+":
      alert("El resultado de la suma es: " + (numero1 + numero2));
      break;
    case "-":
      alert("El resultado de la resta es: " + (numero1 - numero2));
      break;
    case "*":
      alert("El resultado de la multiplicación es: " + (numero1 * numero2));
      break;
    case "/":
      if (numero2 !== 0) {
        alert("El resultado de la división es: " + (numero1 / numero2));
      } else {
        alert("No se puede dividir por 0.");
      }
      break;
    default:
      alert("Operación no válida.");
  }