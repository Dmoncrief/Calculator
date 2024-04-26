"use strict";

window.onload = init;

function init(){
    const helloBtnElement = document.getElementById("helloBtn");
    helloBtnElement.onclick = onGreetuserBtnClicked;
    console.log("index.js init() executed");
}


function onGreetUserBtnClcicked() {
    alert("Hi there!");



const answerElement = document.getElementById("answerField")


// For buttons

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElemenyById("subtractBtn");
const multipyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElemenyById("divideBtn");

addBtn.onclick = onAddButtonClicked;
subtractBtn.onclick = onSubtractButtonClicked;
multiplyBtn.onclick = onMultiplyButtonClicked;
divideBtn.onclick = onDivideButtonClicked;

}

function onAddButtonClicked(){
    const number1Value = number1Element.value;
    const number2Value = number2Element.value;
}

console.log(number1Value + number2Element);



function onSubtractButtonClicked(){
    console.log("subtract")
}
 function onMultiplyButtonClicked(){
    console.log(Multiply)
 }

 function onDivideButtonClicked(){
    console.log("Divide")
 }