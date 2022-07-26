document.addEventListener('keydown', (event) => {
    play(event)
});
const keys = document.querySelectorAll(".card");
keys.forEach(key=>key.addEventListener('transitionend',prueba))
console.log("HOla")
    
    

var play = (e) => {
    let audio = document.getElementById(`a${e.keyCode}`)
    let key =  document.getElementById(`k${e.keyCode}`)

    audio.currentTime = 0;
    audio.play()
    key.classList.add("shine")
}


function prueba (e){
    if (e.propertyName === 'transform'){
        this.classList.remove('shine');
    }
}

