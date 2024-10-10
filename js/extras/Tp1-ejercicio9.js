// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

const frase = prompt("Ingrese una frase").toLowerCase();
// Hola mundo (10 caracteres)
//avion aio
//elefante eeae
//avon
console.log(frase.length); //devuelve cantidad de caracteres
//substring devuelve varios caracteres indico el principio y fin de la palabra que quiero cortar
console.log(frase.charAt(0));

console.log(frase.toLowerCase());
console.log(frase.toUpperCase());

for(let caracter=0; caracter < frase.length; caracter++){
    if (
        frase.charAt(caracter) === "a" ||
        frase.charAt(caracter) === "e" ||
        frase.charAt(caracter) === "i" ||
        frase.charAt(caracter) === "o" ||
        frase.charAt(caracter) === "u"
      ) {
        document.write(frase.charAt(caracter));
      }
}

