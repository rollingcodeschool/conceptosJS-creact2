//Persona
//nombre, apellido, mail, telefono, ciudad, pais, dni

//Alumno
//comision, certificacion, asistencia, notas, promedio
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
    get apellido(){
        return this.#apellido
    }

    set apellido(nuevoApellido){
        if(nuevoApellido.trim().length > 0){
            this.#apellido = nuevoApellido;
        }
    }

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

class Alumno extends Persona {
    #comision
    constructor(nombre, apellidoParam, mail, telefono, ciudad, pais, dni, comision, certificacion){
       //invoca al constructor de persona
       super(nombre, apellidoParam, mail, telefono, ciudad, pais, dni)
       this.#comision = comision;
       this._certificacion = certificacion;
       this.asistencia = 0;
       this.notas = [];
       this.promedio = 0;
    }

    get getComision(){
        return this.#comision;
    }

    set setComision(nuevaComision){
        this.#comision = nuevaComision;
    }
    get getCertificacion(){
        return this._certificacion;
    }

    set setCertificacion(nuevaCertificacion){
        this._certificacion = nuevaCertificacion;
    }

    //puedo agregar mis metodos [5,4,6]
    obtenerPromedio(){
        let suma=0;
        for(let i=0; i< this.notas.length; i++){
            suma = suma + this.notas[i]
        }
        return suma/this.notas.length
    }
    //polimorfismo
    mostrarDatos(){
        document.write(`<ul>
            <li>Nombre: ${this.getNombre}</li>
            <li>Apellido: ${this.apellido}</li>
            <li>DNI: ${this.dni}</li>
            <li>Comision:${this.getComision}</li>
            <li>Notas: ${this.notas}</li>
            <li>Promedio: ${this.promedio}</li>
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
document.write(`<h2>Usando la clase alumno</h2>`)

const fabricio = new Alumno('Fabricio', 'Carrizo', 'fabricio@mail.com', '543816778853','San Miguel de Tucumán', 'Argentina', '34555888','react2','HTML,CSS,Bootstrap')


fabricio.mostrarDatos();
document.write(`<p>Comision actual: ${fabricio.getComision}</p>`)
fabricio.setComision = 'comision react2'

document.write(`<p>Comision actual: ${fabricio.getComision}</p>`)
document.write(`<p>Certificacion: ${fabricio.getCertificacion}</p>`)

//agregar notas a fabricio
fabricio.notas.push(5,4,6)
console.log(fabricio)

document.write(`<p>Alumno : ${fabricio.getNombre}, ${fabricio.apellido} - promedio actual ${fabricio.obtenerPromedio()}</p>`)