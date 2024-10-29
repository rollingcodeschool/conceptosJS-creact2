//notacion literal

const cancion = {
    //propiedades => clave : valor
    titulo: 'Cancion Animal',
    grupo: 'Soda estereo',
    anioLanzamiento: 1990,
    album: ['album 1', 'album 2'],
    duracion: '4:05',
    estado: true,
    //metodos
    reproducir: function (){
        console.log(this)
        document.write(`<p>... comenzando a reproducir la cancion "${this.titulo}" ▶ </p>`)
    },
    stop: ()=>{
        console.log(this)
        document.write('<p>La cancion se detuvo ⏹ </p>')
    } 
}

console.log(this)

//mostrar el objeto
console.log(cancion)
document.write(cancion)
//mostrar propiedades de un objeto
document.write(`<p>Titulo de la canción: ${cancion.titulo}</p>`)
document.write(`<p>Grupo: ${cancion['grupo']}</p>`)
document.write(`<p>Discografica: ${cancion.discografica}</p>`)

//modificar una propiedad del objeto
cancion.duracion = '4:00'
document.write(`<p>Duración de la canción: ${cancion.duracion}</p>`)

//agregar una propiedad a un objeto
cancion.discografica = 'Columbia Records'
document.write(`<p>Discografica: ${cancion.discografica}</p>`)
console.log(cancion)

// borrar una propiedad de un objeto
delete cancion.album;
document.write(`<p>Album: ${cancion.album}</p>`)
console.log(cancion)

//usar metodos del objeto cancion
cancion.reproducir();
cancion.stop();
