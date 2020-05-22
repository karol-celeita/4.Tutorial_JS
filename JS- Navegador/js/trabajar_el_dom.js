//Hijos
    //childNodes Tra todos los hijos pero no los nietos
    //children
    //firstChild Toma el primer hijo puede no ser un elemento(espacio en blanco)
    //firstElementChild  Muestra el elemento hijo (mas recomendable)
    //lastChild
    //lastElementChild
    //hasChildNodes() Busca cual elemento tiene hijos y devuelve con texto

const parent =document.getElementById('parent')
console.log(parent.firstElementChild)

//Hermanos
    //nextSibling
    //nextElementSibling
    //previousSibling
    //previousElementSibling
const grandson = document.getElementById('grandson')
console.log(grandson.parentElement)
//Padre
    //parentNode
    //parentElement

//INSERTAR ELEMENTOS
    const newElement= document.createElement('div')
    newElement.textContent='Soy un nuevo elemento'
    parent.appendChild(newElement)

    //insertBefore(new,nextNode) Añade antes del elemento, si quiero insertarlo en un nieto, primero debo acceder a sus hijos y padres
        //parent.insertBefore(newElement, nieto3)

        const post=document.getElementById('post')

        const getMiddlechild =element =>{
            const childs=element.children,
            l =childs.length,
            i=Math.floor(1/2)
        return childs[i]
        }
        console.log(getMiddlechild(post))

    //insertAdjacent
        //Métodos
        //insertAdjacentElement(position, el)
        //insertAdjacentHTML(position, html)
        //insertAdjacentText(position, text)

        //Posiciones
        //beforebegin :hermano anterior
        //afterbegin  :primer hijo
        //beforeend   :ultimo hijo
        //afterend    :hermano siguiente

    //parent.replaceChild(newChild,oldChild) Se parte del padre

    //createDocumentFragment() Guarda estructuras HTMl en memoria antes de mostrarlas

//JQuery LIKE

        const adt =document.createElement('div')
        adt.id='Karol'
        adt.textContent='Publicidad'
        parent.children[0].replaceWith(adt)

    //before()  hermano anterior
    //after()   hermano siguiente
    //prepend() primer hijo
    //append()  ultimo hijo
    //child.replaceWith(newChild) Se parte del hijo
    
//Clonar o Eliminar
    //cloneNode() 
        //const new= S0.cloneNode(true)
        //$0.after(new)
    //remove() $0.remove()

//Templates HTML
const template= document.getElementById('template')
const newTemplate=template.content.cloneNode(true)
newTemplate.querySelector('h2').textContent='Karol'
newTemplate.querySelector('p').textContent = 'Voy a vivir en mi apartamento'
document.getElementById('content').appendChild(newTemplate)

//CSSOM :DOM de CSS
    const title = document.querySelector('h1')
    const desc = document.querySelector('p')

    //style: Si la propiedad en CSS tiene guiones debe reeplazarse por camelCase
    title.style.color='red'


//matchMedia()
//matches es una propiedad que si es true se cumple el mediaquery
const mediumBp = matchMedia('(min-width: 640px)and (orientation:portrait)')
console.log(mediumBp)

//getComputedStyle()
console.log(getComputedStyle(title).fontSize)

//$0.getBoundingClientRect().top
//Muestra los pixeles que hay entre la imagen y la pantalla del navegador

//naturalWidth , naturalHeight : Tamaño real de una imagen