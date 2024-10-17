//declarar variables
const nombre = prompt('Ingresa un nombre')
console.log(nombre)
const apellido = prompt('Ingresa un apellido')

//funciones declarativas
//funciones sin parametro
function saludar() {
  document.write("<p>Hola mundo 🌎, ¿como estan?</p>");
}

//funcion con parametro
function saludarPersona(nombre, apellido){
    document.write(`<p>Hola ${nombre}, ${apellido} </p>`);
    const edad = 20;
    console.log(edad)
}

//funcion que retornan un valor
function sumar(numero1, numero2){
    const total = numero1 + numero2;
    console.log(total)
    return total;
}


//usar una funcion
saludar();

document.write(`<p>Aqui agrego un ejemplo de suma (4+2): ${4 + 2}</p>`);
document.write(`<p>Aqui agrego un ejemplo de resta (4-2): ${4 - 2}</p>`);
document.write(
  `<p>Aqui agrego un ejemplo de multiplicacion (4*2): ${4 * 2}</p>`
);

saludar();
saludar();
saludar();
saludar();

saludarPersona(nombre, apellido);
saludarPersona('Cristian', 'Arrieta');

const resultado = sumar(7,20);
document.write(
    `<p>El resultado de la suma es: ${resultado}</p>`
  );

