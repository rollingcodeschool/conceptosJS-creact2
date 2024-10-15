//declarar un array vacio
const precios = [];

//declarar un array con datos
const peliculas = ['shrek 1',true, 2024, 'shrek 2', 'Titanic', '5.5', 'Titanes del pacifico']

//mostrar un array en el documento html
document.write(precios +'<br>')
document.write(peliculas +'<br>')
//mostrar el array en consola
console.log(precios)
console.log(peliculas)

document.write(`<p>Cantidad de elementos en el array de precios: ${precios.length}</p>`)
document.write(`<p>Cantidad de elementos en el array de peliculas: ${peliculas.length}</p>`)

//mostrar un elemento del array
document.write(`<p>Mostrar un elemento del array: ${peliculas[4]}</p>`)

//mostrar un array completo
document.write(`<h2>Mostrar elementos del array de peliculas</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')