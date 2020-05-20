
//Desestructuración de arrays (para acceder a cada elemento)
let array=[1,2,'hola',4]
let [s1,s2,s3,s4]=array

//Añadir o quitar
let arr=[1,2,3,4,5]
arr.push(6)
arr.pop()             //Elimina el ultimo valor
arr.unshift('Nuevo')  //Se añade al inicio de la lista
arr.shift()           //Elimina el primer valor
arr.splice(2, 0, 'Colombia', 'Peru')  //arr.splice(indice para ubicarlos, cuantos elementos eliminar , datos a insertar) Añade de forma personalizada
arr.splice(1, 1)  //Para eliminar

arr.slice(2,4) //Trae elementos en un nuevo array , diferente de splice

//Ordenar elementos
'Hola amigo'.split('').reverse() //Trae los indices al reves
const reverseText = string =>string.split('').reverse().join('') //Toma un texto lo pone al reves y lo une de nuevo

let arr2=['Z','S','A']
arr2.sort()    //Ordena las letras son sirve con strings

let arranum=[1,220,24,242,45]
arranum.sort((a,b) =>a-b)

arranum.join(',') //convierte a strings
arranum.concat(arr2) //Une dos arrays, no modifica los arrays originales

//Encontrar elementos
arranum.indexOf(220) //da un -1 si  no encuentra nada
arranum.find(number => number >100) //Devuelve el primer dato que cumpla con la condición
arranum.findIndex(number => number > 100) //Devuelve el indice dato que cumpla con la condición

//Eliminar elementos duplicados usando SPREAD OPERATOR (...) expande los valores
let repeat = [10,10,2,5,12,14,10,89,52,12,14]
[...new Set(repeat)]
const removeDupliates=array =>[...new Set(array)]
removeDupliates(['a','b','c','c'])

Math.min(10,20,30,1)
let number3 = [10, 20, 30, 1]
Math.min(number3) // Es igual a NaN
Math.min(...number3)

let arr4=['a','b','c','d','e','f']

//Recorrer usando for
for(let i=0; i<arr4.length; i++){
    console.log(arr[i])
}
 //Recorrer usando for of
for(let element of arr){
    console.log(element)
}

arr4.forEach((elemento, indice) =>{  //Muestra el elemento y el indice de cada iteración
    console.log(elemento)
    console.log(indice)
})
let arrvacio=[]
repeat.forEach(e1 =>  {
    arrvacio.push(e1*e1)
});
console.log(arrvacio)

//Metodo.some(busca un valor y si esta devuelve un boolean) y every(busca que todos los valores cumplan la condición)
arr4.some(elemento => elemento ==='a')
arr4.every(elemento =>elemento.includes('a'))

//Metodo Map() Transforma los elementos del array
let numbers4 = [5,8,9,10,45]
numbers4.map(el=> el*el)

//Filter
let otherArray = numbers4.filter(el=>el>5)

let sum = numbers4.reduce((a,b)=>a+b)