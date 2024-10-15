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

//agregar elementos en el array
//agregar un elemento al principio del array
peliculas.unshift('Interestelar','Los increibles')
document.write(`<h2>Agregamos 2 elementos al principio del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')

//agregar un elemento al final del array
peliculas.push('furia de titanes')
document.write(`<h2>Agregamos 1 elemento al final del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')

peliculas.splice(3,0,'spiderman no way home')
document.write(`<h2>Agregamos 1 elemento en el medio del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')

//modificar elementos en el array
peliculas[4] = 'Cars 1'
document.write(`<h2>Modificamos el elemento de la posicion 4 del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')


//borrar elementos en el array