const buttonsEl = document.querySelectorAll("button");

const inputFieldEl = document.getElementById("result");

for(let i = 0; i<buttonsEl.length; i++){
    buttonsEl[i].addEventListener("click", ()=>{
       const buttonValue = buttonsEl[i].textContent;
       if(buttonValue === "C"){
        clearResut()
       }else if(buttonValue === "="){
        calculateResult()
       }else{
        appendValue(buttonValue)
       }
        
    } )
}


function clearResut(){
    inputFieldEl.value = "0"
}

function calculateResult(){
    inputFieldEl.value = eval(inputFieldEl.value)
}

function appendValue(buttonsEl){
    inputFieldEl.value += buttonsEl
}