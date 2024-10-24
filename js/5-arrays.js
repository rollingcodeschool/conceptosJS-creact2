//declarar un array vacio
const precios = [];

//declarar un array con datos
const peliculas = ['shrek 1',true, 2024, 'shrek 2', 'Titanic', '5.5', 'Titanes del pacifico']

//agrego una funcion
function mostrarPeliculas (titulo){
    document.write(`<h2>${titulo}</h2>`)
    document.write('<ul>')
    for(let i=0; i < peliculas.length; i++){
        document.write(`<li>${peliculas[i]}</li>`)
    }
    document.write('</ul>')
}

const mostrarArreglos = (arreglo, titulo)=>{
    document.write(`<h2>${titulo}</h2>`)
    document.write('<ol>')
    //map
    arreglo.map((item)=> document.write(`<li>${item}</li>`))
    document.write('</ol>')
}

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
mostrarPeliculas('Mostrar elementos del array de peliculas');

//agregar elementos en el array
//agregar un elemento al principio del array
peliculas.unshift('Interestelar','Los increibles')
mostrarPeliculas(`Agregamos 2 elementos al principio del array, peliculas: ${peliculas.length}`)

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

//borrar al principio
peliculas.shift()
document.write(`<h2>Borramos el primer elemento del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')

//borrar al final
peliculas.pop()
document.write(`<h2>Borramos el ultimo elemento del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')

//borrar en el medio del array
peliculas.splice(4,1) //aqui borro una peli, la que esta en la posicion 4
// peliculas.splice(4,2)aqui borro dos pelis, la que esta en la posicion 4
// peliculas.splice(4) aqui borro desde la posicion 4 todos los elementos del array

document.write(`<h2>Borramos el elemento de la posicion 4 del array, peliculas: ${peliculas.length}</h2>`)
document.write('<ul>')
for(let i=0; i < peliculas.length; i++){
    document.write(`<li>${peliculas[i]}</li>`)
}
document.write('</ul>')


document.write(`<p>Elemento 20 del array de peliculas: ${peliculas[20]}</p>`)

//quiero encontrar un elemento en el array 'Titanic'
//quiero encontrar un elemento en el array 'enc'
const encontreTitanic = peliculas.find((itemPelicula)=> itemPelicula === 'Titanic' )
const encontreVengadores = peliculas.find((itemPelicula)=> itemPelicula === 'Vengadores: End game' )
console.log(encontreTitanic)
console.log(encontreVengadores)

//buscamos la posicion de las peliculas anteriores
const posicionPeliTitanic = peliculas.findIndex((item)=> item === 'Titanic')
const posicionPeliVengadores = peliculas.findIndex((item)=> item === 'Vengadores: End game')
console.log(posicionPeliTitanic, posicionPeliVengadores)

document.write(`<p>Peli encontrada ${encontreTitanic}, esta en la posicion ${posicionPeliTitanic} del array </p>`)
document.write(`<p>Peli encontrada ${encontreVengadores}, esta en la posicion ${posicionPeliVengadores} del array </p>`)


//si quiero filtrar elemntos del array 
peliculas.push('Shrek 3', 'Shrek 4')
const sagaSherk = peliculas.filter((pelicula)=> pelicula.toLowerCase().includes('shrek'))
console.log(peliculas[1].includes('shrek'))
console.log(sagaSherk)

mostrarPeliculas('Agregamos Sherk 3 y 4');
mostrarArreglos(sagaSherk,'Peliculas de Shrek');