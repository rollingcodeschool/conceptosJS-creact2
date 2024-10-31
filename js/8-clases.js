//Persona
//nombre, apellido, mail, telefono, ciudad, pais, dni

//Alumno
//comision, tipo, certificacion, asistencia, notas, promedio
class Persona{
    //propiedades privados
    #apellido;
    #nombre;
    //constructor sabe crear las propiedades de mi objeto
    constructor(nombre, apellidoParam, mail, telefono, ciudad, pais, dni){
        this.#apellido = apellidoParam;
        this.#nombre = nombre;
        this.mail= mail;
        this.telefono = telefono;
        this.ciudad = ciudad;
        this.pais = pais;
        this.dni=dni;
        this.estado=true; //propiedad por defecto
    }
    //propiedades computadas get y set
    // get apellido(){
    //     return this.#apellido
    // }

    // set apellido(nuevoApellido){
    //     if(nuevoApellido.trim().length > 0){
    //         this.#apellido = nuevoApellido;
    //     }
    // }

    get getNombre(){
        return this.#nombre
    }

    set setNombre(nuevoNombre){
        if(nuevoNombre.trim().length > 0){
                 this.#nombre = nuevoNombre;
        }
    }


    //metodos
    mostrarDatos(){
        document.write(`<ul>
            <li>Nombre: ${this.#nombre}</li>
            <li>Apellido: ${this.#apellido}</li>
            <li>DNI: ${this.dni}</li>
            </ul>`)
    }
}

//usar la clase persona, instanciar, crear un objeto de tipo Persona
const cristian = new Persona('Cristian', 'Arrieta','cristian@mail.com','543816778855','Famailla', 'Argentina','35777888')

const dana = new Persona('Dana', 'Albornoz','dana@mail.com','38200038484','Mar del Plata', 'Argentina', '37666222')

console.log(cristian)
console.log(dana)

cristian.mostrarDatos();
dana.mostrarDatos();

//acceder a una propiedad del objeto
// document.write(`<p>Mostrar el nombre y apellido: ${dana.nombre}, ${dana.apellido}</p>`)
dana.setNombre = 'Yael'

document.write(`<p>Mostrar el nombre: ${dana.getNombre}</p>`)

