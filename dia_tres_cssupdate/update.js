const inputs = document.querySelectorAll("input");
console.log(inputs[1].value)
function backgroundUpdate(){
    console.log(this.value)
    console.log(this.id)
    if (this.id === 'degradado'){
        document.styleSheets[0].cssRules[1].style.setProperty(`--${this.id}`, this.value+'%');
    }else{
        document.styleSheets[0].cssRules[1].style.setProperty(`--${this.id}`, this.value);

    }
}
inputs.forEach(input => input.addEventListener('change', backgroundUpdate))
inputs.forEach(input => input.addEventListener('mousemove', backgroundUpdate))

const next = (x,stat) =>{
    
    var number = document.getElementById(`box${x}`)
    var num = number.innerHTML;
    console.log(num)
    num ++;
    number.innerHTML = num;
    number.classList.add("box");
    document.styleSheets[0].cssRules[1].style.setProperty(`--${stat}`, parseInt(num/150*100)+'%');  
    document.getElementById(stat).innerHTML = num;
}
const prev = (x,stat) =>{
    var number = document.getElementById(`box${x}`)
    var num = number.innerHTML;
    console.log(num);
    num --;
    number.innerHTML = num;
    number.classList.add("box");
    document.styleSheets[0].cssRules[1].style.setProperty(`--${stat}`, parseInt(num/150*100)+'%');
    document.getElementById(stat).innerHTML = num;
}