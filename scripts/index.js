"use strict";

window.onload = init;
//  Declare Variables

//input
const numberField1 = document.getElementById("numberField1");
const numberField2 = document.getElementById("numberField2");

//buttons
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");

//output
const answerField = document.getElementById("answerField");

function init() {
  addBtn.onclick = addBtnClicked;
  subtractBtn.onclick = subtractBtnClicked;
  multiplyBtn.onclick = multiplyBtnClicked;
  divideBtn.onclick = divideBtnClicked;
}

function addBtnClicked() {
  let num1 = Number(numberField1.value);
  let num2 = Number(numberField2.value);
  let answer = num1 + num2;
  answerField.value = answer;

  // console.log(addBtn);
}

function subtractBtnClicked() {
  let num1 = Number(numberField1.value);
  let num2 = Number(numberField2.value);
  let answer = num1 - num2;
  answerField.value = answer;
}

function multiplyBtnClicked() {
    let num1 = Number(numberField1.value);
    let num2 = Number(numberField2.value);
  let answer = num1 * num2;
  answerField.value = answer;
}

function divideBtnClicked() {
    let num1 = Number(numberField1.value);
    let num2 = Number(numberField2.value);
  let answer = num1 / num2;
  answerField.value = answer;
}
