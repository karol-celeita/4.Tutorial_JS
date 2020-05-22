const button= document.getElementById('button')
const dblclick = document.getElementById('dblclick')
const click = document.getElementById('click')
const mouseenter = document.getElementById('mouseenter')
const mouseleave = document.getElementById('mouseleave')
const contextmenu = document.getElementById('contextmenu')
const mousedown = document.getElementById('mousedown')
const mouseup = document.getElementById('mouseup')
const mousemove = document.getElementById('mousemove')


//Formula: button.addEventListener('nombreEvento',callback o función)

//Defino la función y la paso al parametro
const hello = e => alert(e.target.textContent)

//Para hacer textos dinamicos paso el parametro texto
    button.addEventListener('click',e =>{
        hello(e)
    })

//EVENTOS DE MOUSE

    click.addEventListener('click', e => {
        hello(e)
    })

    dblclick.addEventListener('dblclick', e => {
        hello(e)
    })
  
//    mouseenter.addEventListener('mouseenter', e => {
//        hello(e)
//    })

//    mouseleave.addEventListener('mouseleave', e => {
//        hello(e)
//    })

// Hacer menu clic derecho
    const createMenu=() =>{
        const menu=document.createElement('div')
        menu.textContent='Soy un menu'
        document.body.appendChild(menu)
    }
    contextmenu.addEventListener('contextmenu', e => {
    createMenu()
    e.preventDefault() //Desactiva las funciones del navegador
    })

//mousedown = Click por arto tiempo presionado
//mouseup = Cuando la suelta
//Mousemove= Cuando se mueve dentro de un objeto


//EVENTOS DE TECLADO
    const input=document.getElementById('input')

    input.addEventListener('keyup',e =>{
        console.log(e.key)
        console.log(e)

    })
    //keydown = Cuando presiono
    //keypress =Flecha presionada
    //Tambien se usa el ArrowDown, ArrowUp. ArrowLeft, ArrowRight (flechas)

//EVENTOS DE FORMULARIO
    //submit
    const form= document.getElementById('form')

        form.addEventListener('submit',() =>{
            console.log('Ha enviado el formulario')
        })

    //change :cambia un elemento del form

    const remember = document.getElementById('remember')

        remember.addEventListener('change', e => {
            if (e.target.checked){
                console.log('Recordar password')
            }else{
                console.log('')
            }
        })

    // focus: Cuando haces click en un input cuando seleccionas otro input se pasa a //blur
    //reset : limpia los resultados

//EVENTOS DE DOM
    //Carga los elementos antes del script del html
        addEventListener('DOMContentLoaded',() =>{ })

    //load:Parecido a DomContentLoaded, pero ocurre despues de que carga la página
    //scroll: 
        addEventListener('scroll', e => { 
            console.log(scrollX,scrollY)
        })

    //resize
    addEventListener('resize', e => {
        console.log(e)
    })


//EVENTOS MULTIMEDIA
const play = document.getElementById('play')
      pause = document.getElementById('pause')
      video = document.getElementById('video')

    play.addEventListener('click', ()=>{
        video.play()
    })

    pause.addEventListener('click', () => {
        video.pause()
    })

//PROPOGACION DE EVENTOS
//    document.querySelectorAll('div').forEach(el =>{
//        el.addEventListener('click',e =>{
//            console.log(`Hiciste click en el ${e.target.id}`)
//            e.stopPropagation() //Para la elevación de eventos
//        })
 //   })

 //DELEGACION DE EVENTOS
const gallery = document.getElementById('gallery')
    gallery.addEventListener('click',e =>{
        const t= e.target
        const images=gallery.querySelectorAll('img')
        i=images.indexOf(t)
        console.log(e.target)
    })