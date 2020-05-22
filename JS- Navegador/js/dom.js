//Seleccionar Nodos
    //Con id
    const title=document.getElementById('title')
        title.style.background='yellow';

    // Con selectores de CSS
    console.log(document.querySelector('#title'))

    const listItems=document.querySelectorAll('ul li') //Devuelve en una lista
    console.log(listItems[0])

    list=document.getElementById('list')
    console.log(list.querySelector('li:last-child'))

    //querySelectorAll vs getElementByTagName
    //Genera   Nodos               HTMLCollection

//Para recorrer los  elementos primero se convierten en un array
    //1. const NodeList =[Array.from(document.querySelectorAll('li'))]

    //2.
    const NodeList = document.querySelectorAll('li')
    for(let el of NodeList){
        el.style.background='pink'
    }

//ATRIBUTOS
    //getAttribute  : Muestra el atributo 
    const parrafo=document.getElementById('parrafo')
    console.log(parrafo.getAttribute('id')) // class, value 

    //set.getAttribute : Define un atributo
    //title.setAttribute('id','title')
    // title.id='title'

//classList: agrega una clase sus parametros son: 
    // add(añade), remove(quita) toggle(añade o quita segun la necesidad)
    parrafo.classList.toggle('main-karol','title-front-page')

//CONTENIDO DE LOS ELEMENTOS
    console.log(title.textContent) //Devuelve solo el texto
    console.log(title.innerHTML)   //Devuelve las etiquetas html que lo contengan
    console.log(title.outerHTML)   //Devuelve el elemento y la etiqueta HTML

title.textContent=`Clase : EL DOM` //Usar backtips

//CREAR ELEMENTOS
    const nombre=document.createElement('h3')
    nombre.textContent='Karol Celeita'
    nombre.classList.add('developer')
    nombre.id='engineer'

    document.body.appendChild(nombre)