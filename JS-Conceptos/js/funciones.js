//Una funcion es un trozo de codigo reutilizable en el que hay instrucciones 
//  input (argumentos) => función => salida(valor de retorno)

//funcion por declaracion
function saludar(persona,sexo) {
    let saludo = sexo === 'm'
        ? `Bienvenido`
        : `Bienvenida`
    return `${saludo} a casa ${persona}`
        
}
console.log(saludar('Beto','m'))
console.log(saludar('Karol','f'))


//funciones de flecha
//Los parámetros son las variables de la funcion y los datos que ingrese serán los argumentos
//Los parámetros se pueden definir por defecto en la función y solo añadirlo como parámetro cuando cambie
// Si hay + argumentos que parámetros los omite
//Si hay - argumentos que parámetros será undefined

const completar=(persona='visitante',sexo='m') =>{
    let saludo = sexo === 'm'
        ? `Bienvenido`
        : `Bienvenida`
    return `${saludo} a casa ${persona}`

}

console.log(completar('Juan'))
console.log(completar('Lina', 'f'))
console.log(completar())

const sumar=(a,b) => a+b

//Parámetro rest :Permite pasar un número indefinido de datos
const sumarTodos=(...numeros) =>{
    console.log(numeros[4])
    let resultado=0
    for(let i =0; i<numeros.length; i++){
        resultado+=numeros[i]
    }
    return resultado
}
console.log(sumarTodos(1,2,3,4,8,9,5))

//Las F pueden ser almacenadas como variables o constantes
const c=console.log
const multiplicar=(a,b)=>a*b
c(multiplicar(3,4))

// Pueden ser pasadas como argumentos de otra función
let edad=multiplicar(5,4)
let edad2 =multiplicar(multiplicar(5,4),2)
c(edad2)

// Pueden ser retornadas por otra funcion, es la base de los closures
function sumarDatos(x) {
    return function (y) {
        return x+y
    }
}
c(sumarDatos(5)(2))
// const sumarDatos= x=>y =>x+y  En Flecha

const doSomething=x =>y =>x*y
const a =doSomething(2)(2)
const b= doSomething(3)
c(doSomething(a)(b(3)))

 //TIPOS DE FUNCIONES
 //Puras: No causa efecto secundario y siempre devuelve los mismos valores para los mismos parámetros
    let pure = 'Hola'
    const greetingsPure = (saludo, persona) => `${saludo} ${persona}`
    c(greetingsPure(pure, 'Lucho'))
    c(pure)

//no pura

 let greeting='Hola'
 const greetings= persona =>{
     greeting= greeting + ' ' + persona
     return greeting
 }
 c(greetings('Luis'))
c(greeting)

//Autoinvocada: No necesitan llamarse despues

let auto = 'Bienvenido'
const greetingsAuto =( (saludo, persona) => `${saludo} ${persona}`)(auto,'Mariana')
c(greetingsAuto)

//Nombradas (como los ej anteriores )y anonimas :
setTimeout(() => {
    alert('Hola a todos amiguiños')
}, 2000);

//SCOPE: ubicación de las variables
{
let profesor='Karol'
    {
        c(profesor)
    }
}

//CLOSURE :Como a traves de funciones internas llego a valores externos
function aumentar() {
    let numero=0
    return function () {
        numero++
        c(numero)
        
    }
}
const incrementar=aumentar()
incrementar()
incrementar()
incrementar()
incrementar()

//THIS: Representa al objeto del cual se ejecuta la funcion
let user={
    nombre:'Karol',
    edad: 12,
    getEdad(){
        c(this.edad)
    }
}
user.getEdad()