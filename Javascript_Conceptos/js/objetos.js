
//Objeto es una estructura de datos
let perro= {
    nombre:'Teddy',
    edad: 3,
    vacunas:true,
    correr(){
        console.log(`${this.nombre} corre`)
    }
}
perro.correr()


//Propiedades

let user={
    nombre: 'Pedro',
    'ape-llido':'Perez'
    //Si se ponen variables con caracteres se puede acceder por[] user.[ape-llido]
}
let a='hola', b='amigos'
let saludo ={
    [a+b]:'Mi saludo normal'
}

let myObj={a,b} //Uso el scope para traer las variables de arriba

//Eliminar propiedad
delete perro.edad

//Añadir propiedad
perro.edad=5

//Propiedades
//Un prototipo es un molde del cual se crea un objeto, esto hereda propiedades de otro objeto
Object.getPrototypeOf(perro) //Muestra el prototipo
//String, Number, Boolean  en mayucula significa que es un prototipo

//Operador in  devuelve un boolean 

'edad' in perro

//ciclo for *Devuelve propiedades heredadad OJOOO*
for(let property in perro){
    console.log(property)
}

//Mutabilidad y copiado
//Los valores primitivos no son mutables, los objetos y arrays si
//Son asignados por referencia no por valor
let otroPerro=perro
otroPerro.patas=4

//Así no modifica al otro objeto
let perro2=Object.assign({},perro)

//Recorrer objeto
 //for in  - hasOwnProperty
 // for of  - No recorre un objeto por si solo porque no tiene indices(no es iterable)
 //Se deben usar
Object.entries(perro) //Devuelve cada clave-valor del objeto
Object.keys(perro)  // Devuelve un object con todas las propiedades
Object.values(perro) //Devuelve un object con todas los valores
