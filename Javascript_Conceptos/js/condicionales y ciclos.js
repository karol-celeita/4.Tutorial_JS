
//se pueden hacer de linea o de bloque dependiendo del tamaño
if ('a' == 'c') console.log('Ejecución exitosa')

if ('a'=='b'){
    console.log('Ejecución exitosa')
} else{
    console.log('Ejecución erronea')
}

//Condiciones  multiples: El && se usa para el conector 'y' y el conector 'o' es con || 
if (2>3 || 5>2){
    console.log('Condición o')
}

//Condiciones anidadas
if (4 > 3 ) {
    console.log('Paso la condicion 1')
    if(5 < 7){
        console.log('Paso la condicion 2')

    }
}

let age=parseInt(prompt('Dime tu edad'),10)
if (age){
    if(age >=18){
        alert('Eres mayor de edad')
    } else{
        alert('Te faltan años')
    }
} else{
    age=parseInt(prompt('Debe ser un numero'),10)
}
//Valores Falsy: por defecto dan false sin ser booleano
// - 0
//  - ""
//  -NaN
//  -undefined
//  -null

//Valores Truthy
//-string no vacio
//- numero diferente de cero
//- arrays
//-objetos

//SWITCH Para comparar un valor con una serie de valores
let answer =parseInt(prompt('Escoge un numero del 1 al 3'),10)

switch (answer) {
    case 1:
        alert('Eres tímido')
        break
    case 2:
        alert('Eres feliz')
        break
    case 3:
        alert('Eres extrovertido')
        break
    default:
        alert('Por favor escribe un numero del 1 al 3')
  
}

//CICLO FOR, BREAK: Rompe el ciclo  CONTINUE: Excluye del ciclo la condición 

for(let i=1; i<100;i++){
   if (i%7===0) continue
    console.log(i)

}
let n = 0
for (let i = 1; i < 100; i++) {
    if (i % 7 === 0){
        console.log(i)
        n++
    }
    if (n>5) break
}

//WHILE
let i=10
while(i>0){
    console.log(i)
    i--
}

//DO WHILE
//let password='4562'
//let pass

//do{
//    pass=prompt('Ingresa el password')

//} while(pass !== password)

