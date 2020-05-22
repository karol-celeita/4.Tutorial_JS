//window es el objeto de mas alto nivel en el navegador, todos los objetos vienen de él
 //screen: Dice el ancho y alto del navegador
 //Metodos: alert(), confirm(), prompt(), 
 //open('url','nombre','propiedades=0 witdh=400') Permite abrir una ventana del navegador
//close() Para cerrar la ventana emergente debe estar el open o el navegador lo bloquea

const form=document.getElementById('form')
if(form){
    form.addEventListener('submit', () =>{
        let witdh= form.querySelector('#width'),
            height=form.querySelector('#height'),
            url = form.querySelector('#url')

        if(width && height && url){
            witdh=witdh.value
            height=height.value
            url=url.value
        }

        window.open(url,url,`innerWidth=${witdh}, innerHeight=${height}`)
    })
}

//Location : Sistema de rutas para las SPA, devuelve la informacion de las urls
    //location.href Es de lectura y escritura
    //location.host  Devuelve el dominio
    //location.hostname  Dominio más puerto
    //location.origin  protocolo + dominio
    //location.pathname  ruta interna luego del dominio

//Metodos
    //location.reload()
    //location.assign('https://youtube.com') sobreescribe el href
    //location.replace('https://youtube.com')

//history : Historial de navegación
    //back()
    //forward()
    //go() -1 back  -2 forward

//navigator
//No preocuparse por el navegador sino por las características
 //Caracteristicas del navegador, o usar CSS (@support), JavaScript(operador in), Modernizr(Pregunta que caracteristicas tiene el navegador y nos informa)

//Timers
    //setTimeout(() => {
        //console.log('hola')
    //}, 2000);

    //let contador= 0
    //const Saludar =setInterval(() => {
        //contador++
        //if (contador >1) {
            //console.log(`hola ${contador} veces`)       
        //} else{
            //console.log(`Hola ${contador} vez`)
        //}
        //if (contador === 4) {
            //clearInterval(Saludar)
        //}

    //}, 1000);

console.log(new Date().toLocaleTimeString())

setInterval(() => {
   const clock= document.getElementById('clock')
    if (clock) clock.textContent = new Date().toLocaleTimeString()
}, 1000);

//Date : Toma  la fecha del sistema oprativo
const now= new Date()

//Instanciar
//new Date()
//new Date(year, month, day) meses de 0 a 11
//new Date(year, month, day, hours, minutes, seconds)
//new Date(string)
//
//Métodos
//getFullYear()
//getMinutes()
//getSeconds()
//getDate()
//getDay()
//getMonth()
//getTime() milisegundos desde el 1 de enero de 1970
//getTimezoneOffset() Dierencia Zona horaria desde el meridiano de GReenwich
//
//Ejercicio cuenta regresiva
//https://www.youtube.com/watch?v=ZbF5qomB8XM