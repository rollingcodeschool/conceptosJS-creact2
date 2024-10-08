//Ejercicio cajero automatico
//pedir al usuario que ingrese una opcion: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir.

//inicializar variables
let saldo = 1000;

const opcion = prompt(
    "Seleccione una opción: 1- consultar el saldo, 2- depositar dinero, 3- extraer dinero, 4- salir"
  )

// if (opcion === 1) {
//   document.write("mostrar el saldo");
// } else if (opcion === 2) {
//   document.write("depositar el dinero");
// } else if (opcion === 3) {
//   document.write("extraer dinero");
// } else if (opcion === 4) {
//   document.write("Cerrando el sistema");
// } else {
//   document.write("Seleccionaste una opcion invalida");
// }

switch (opcion) {
  case 'uno':
  case '1':
  case 1:
    document.write("El saldo es $" + saldo);
    break;
  case '2':
    //cuanto dinero va a depositar
    const deposito = parseFloat(prompt("Ingrese el monto a depositar"));
    if (deposito > 0) {
      //agregar el dinero en su cuenta
      saldo = saldo + deposito;
      document.write(`Depositaste $${deposito}, tu saldo actual es $${saldo}`);
    } else {
      document.write("Ingresaste una cantidad invalida");
    }
    break;
  case '3':
    //preguntar cuanto extraer
    const montoExtraer = parseFloat(prompt("Ingrese el monto a extraer"));
    //preguntar si es un monto valido
    if (montoExtraer > 0) {
      //preguntar si el monto a extraer es menor o igual al saldo disponible
      if (montoExtraer <= saldo) {
        //restar el monto a extraer
        saldo = saldo - montoExtraer;
        document.write(
          `Monto a extraer $${montoExtraer}, tu saldo actual es $${saldo}`
        );
      } else {
        document.write("Saldo insuficiente");
      }
    } else {
      document.write("Ingresaste una cantidad invalida");
    }
    break;
  case '4':
    document.write("Cerrando el sistema");
    break;
  default:
    document.write("Seleccionaste una opcion invalida");
}
