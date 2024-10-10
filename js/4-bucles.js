/* 
mientras se cumple la condicion logica
while(condicion logica){
    todas las lineas que yo quiero repetir varias veces
    agregar una linea de codigo que haga que la condicion no se cumpla en algun momento
}
*/

// crear un programa que muestre una lista de numeros del 1 al 100, cada uno en un renglon nuevo: (Numero: 1)

// let contador = 1;

// while(contador <= 100){
//     document.write(`<p>Número: ${contador}</p>`)
//     //incrementar el contenido de contador
//     contador = contador + 1
// }

//do-while hacer-mientras

/*
do{
    todas las lineas de codigo que quiero repetir
    agregar una linea de codigo que haga que la condicion no se cumpla en algun momento
}while(condicion logica)
*/

let numero = 1000

do{
    document.write(`<p>Número: ${numero}</p>`)
    numero++ //numero= numero +1;
}while(numero <= 100)