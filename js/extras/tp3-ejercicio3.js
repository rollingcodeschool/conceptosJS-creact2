/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.*/

//simular lanzar 2 dados Math.random
function numeroAleatorio(){
   return Math.floor(Math.random() * 6) + 1;
}
const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]

for(let indiceApariciones=0; indiceApariciones < 50; indiceApariciones++){
    const dado1 = numeroAleatorio();
    const dado2 = numeroAleatorio();
    const suma = dado1 + dado2
    apariciones[suma] = apariciones[suma] + 1
    console.log(dado1, dado2, suma, apariciones)
}
//Sumar el resultado de lanzar dos dados

//anotar en un array el número de apariciones de dicha suma