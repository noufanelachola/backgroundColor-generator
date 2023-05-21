// store value from input
const inputValue = [255,255,255];

// store inverted value 
const invertValue = [0,0,0]

// get elements
let contain = document.getElementsByClassName("color-container")[0];
let inputR = document.getElementById("R");
let inputG = document.getElementById("G");
let inputB = document.getElementById("B");
let input = document.getElementsByTagName("input");
let allLabel = document.querySelectorAll("label");

// console.log(allLabel);

// check for input
function checkInput(){
    for(let i=0 ; i<3 ; i++){
        input[i].addEventListener("input",function(){
            inputValue[i] = input[i].value;
            invert();
            applyBg();
        })
    }


}

// place intial value
function initial(){
    for(let i=0 ; i<3 ; i++){
        input[i].value = inputValue[i];
    }
}

// apply to background color
function applyBg(){
    contain.style.backgroundColor = `rgb(${inputValue[0]} , ${inputValue[1]} , ${inputValue[2]})`;
    applyInvert();
}

// color for font
function invert(){
    for(let i=0; i<3; i++){
        invertValue[i] = 255 -inputValue[i];
        console.log(invertValue); 
    }
}

function applyInvert(){
    for(let i=0 ; i<3; i++){
        allLabel[i].style.color = `rgb(${invertValue[0]},${invertValue[1]},${invertValue[2]})`;
    }
}

// calling functions
initial();
checkInput();
applyBg();
