/* VARIABLES Y CONSTANTES */

let nombre = 'Karol',
    edad=18, 
    cargo, pais
    edad=19

const numero=10
console.log(nombre, edad, numero,cargo, pais)

//Preferiblemente usar backtrips para strings ``
//typeof (Tipo de dato)
//null no deberia ser un objeto es un bug de JS
//Un lenguaje de programación es aquel que puede manipular datos

/* TYPE COERTION 
Capacidad de JS de conversion de datos a un mismo tipo ej:
'hola' + 10 = 'hola10'
'2' * 20 = 10
'2a'+20 = NaN (Not a number)
true + 1 = 2 */
//En tipos de datos compuestos que esten referenciados cambian los  dos valores (ej: listas)

/* Operador Ternario */

let age=prompt('Dime tu edad')
let isAdult=age>=18                //expresion que devuelve boolean
        ? 'Eres mayor de edad'          //? valorSiEsTrue
        :'Aun eres un niño'             //: valorSiEsFalse
alert(isAdult)

/* Operador Corto Circuito */
//Evalua los valores si el primero es verdadero toma el primero, sino toma el segunto

let c = null || 25
c = 25

let b = 5 || 7
b =5

//Hace el reves que || , evalua y toma el  valor que sea falso

let d = a && 'Juan'
d= 'Juan'

//Métodos de Numeros:

//Muestra los decimales que queramos
let num1=5.12124
num1.toFixed(2)

//Pasar a entero o flotante
num1.parseInt(dato,10)
num1.parseFloat() 

Math.floor(20.7)        // Redondea el dato hacia abajo

Math.ceil(20.1)        // Redondea el dato hacia arriba

Math.round(20.6)       //Redondea el dato segun el valor

Math.ceil(Math.random)  //Devuelve un numero aleatorio

//PROPIEDADES STRINGS:
 'Hola'.length // Muestra la cantidad de caracteres

 //METODOS STRING
 '  hola   '.trim()  //Quita espacio en blanco al inicio o al final
 'hola'.toUpperCase()
 'hola'.toLowerCase()

 let answer=prompt('¿Cual es la capital de Peru?').toUpperCase().trim()
 let message = answer ==='LIMA'
    ?'Correcto'
    :'Opps, error'
alert(message)

//Busca texto en un string devuelve un indice
'Hola amigos'.indexOf('o',2)
'hola amigos'.indexOf('o','Hola amigos'.indexOf('o')+1) //Da -1 si no encuentra el string

//Busca texto en un string devuelve un booleano
'https://karol.home/blog'.includes('blog')

//Palabra que empieza con... devuelve un boolean, tambien esta endsWith
'https://karol.home/blog'.startsWith('https://karol')

//MANIPULAR UN TEXTO
//Reemplaza un texto (original, nuevo)
'Ron con Pasas'.replace('Pasas','Papas')

//Separa texto: split(separator)[quantity]
'Alexys'.split('e')

//Toma todo a aprtir de un rango de indices(inicio, fin)
'Hola Mundo'.substring(4)

//Toma los caracteres a partir del indice (2) hacia la derecha(5)
'Hola Mundo'.substr(2,5)

//toma los 5 ultimos y a esos quitarle los ultimos dos
'Hola Mundo'.slice(-5,-2)

