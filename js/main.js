

//ES6 EJERCICIOS LET Y CONST

// const pi = 3.14;

// let radio = parseInt(prompt("Dime el radio"));

// //Calculo del perimetro

// let perimetro = 2 * pi * radio;

// console.log("El perímetro equivale a ",perimetro);

// //Cálculo del area

// let area = pi * (radio ** 2);

// console.log("El área equivale a ", area);

//ARROW FUNCTION

//Funcion clásica

function Sumar(a,b){
    return a + b;
};

//Funcion ES6

const Restar = (a,b) => {
    return a - b;
};

const Mostrar = (datos) => {

    if (datos) {
        return true;
    } else {
        return false;
    }
};

//Funcion inline

const Dividir = (a,b) => a / b;

// const Dividir = (a,b) => {
//     return a / b;
// };

//Funcion parámetro único

const Modulo = a => a % 23;

//Funcion sin argumento

const Impartir = () => {

};

//Retornando OBJETOS DE JAVASCRIPT

const Alumnos = (clase,ciudad) => ({lugar : clase, city: ciudad});

console.log(Alumnos("wayco","valencia"));

// const Amigos = (edad, nombre) => {
//     let amiguitos = {
//         age: edad,
//         name : nombre
//     };

//     return amiguitos;
// };

const Amigos = (edad, nombre) => ({age : edad, name: nombre});

console.log(Amigos(25,"Ambrosio"));


//MAPEO

let singulares = ["manzana", "naranja", "fresa", "kiwi", "platano"];

let plurales = singulares.map(argumentoArray => argumentoArray + "s");

console.log(plurales);

let numero = [1,2,3,4,5];

let numeroSuma = numero.map(numerito => "96" + numerito);

console.log("CHAN CHAN", numeroSuma);

//

let getPrecioFinal = (precio, impuesto = 0.21) => precio + precio * impuesto;

console.log(getPrecioFinal(200,0.50));

let nombre = ["P","A","C","O"];

let letraPrimera = nombre[0];

let letraUltima = nombre[nombre.length-1];

letras = letraPrimera + letraUltima;

console.log(letras);


//REST

const haceRest = (...argumentos) => {
    // let dificil = argumentos.toString();
    // console.log(dificil);

    console.log(argumentos);

};

haceRest(1,2,"pizza","cerveza","macarrones","guacamole","doritos");
haceRest("pollo","torrijas","albondigas");

// SPREAD


const meHaceSpread = (fuerza, ataque, defensa) => {
    console.log(fuerza,ataque,defensa);
};

let Jin = [20,25,5];

meHaceSpread(...Jin);