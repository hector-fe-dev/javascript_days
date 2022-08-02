
const segundos = document.querySelector('.segundos');
const minutos = document.querySelector('.minutos');
const horas = document.querySelector('.horas');
const digitalclk = document.querySelector('.digital');



const hola = () =>{
    const now = new Date();
    var sec = (now.getSeconds()*6)+90;
    var min = (now.getMinutes()*6)+90;
    var hr = (now.getHours()*30)+90;
    var digital = now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds()
    if (sec > 440) {
        segundos.style.transition = "none";
    } else if (sec > 90) {
    segundos.style.cssText = "transition: all .5;";

    }
    segundos.style.transform = `rotate(${sec}deg)`
    minutos.style.transform = `rotate(${min}deg)`
    horas.style.transform = `rotate(${hr}deg)`
    digitalclk.innerText = digital;

    

}
setInterval(hola, 1000);
