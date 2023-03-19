//select all the target items!
let deleteBtn = document.querySelector("#delete-btn");
let resetBtn = document.querySelector("#reset-btn");
let equalBtn = document.querySelector("#equal-btn");
let buttons = document.querySelectorAll(".btn");
let myScreen = document.querySelector("#screen");

function myCalc (){
    buttons.forEach(function (btns){
        btns.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            myScreen.value += value;
        })
    })
    equalBtn.addEventListener("click", function(e){
        if(myScreen === ""){
          myScreen.value = "";
        }else {
            let computeVal = eval(myScreen.value);
            myScreen.value = computeVal;
        }
    })
    deleteBtn.addEventListener("click", function (e){
        if(myScreen.value === ""){
           myScreen.value = ""
        }else {
            myScreen.value = ""
        }
    })
    resetBtn.addEventListener("click", function (e){
        if(myScreen.value === ""){
           myScreen.value = ""
        }else {
            myScreen.value = ""
        }
    })
}
myCalc();