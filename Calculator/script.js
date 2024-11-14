var equation = document.getElementById("equation");
var _buttons = document.getElementsByTagName("button");
var clearButton = document.getElementById("clear");
var result = document.getElementById("result");



for (let i = 0; i < _buttons.length; i++) {
    if(_buttons[i].innerHTML=="=")
        _buttons[i].addEventListener("click",showResult);
    else if (_buttons[i].innerHTML=="Clear")
        _buttons[i].addEventListener("click",clearEquation);
    else if (_buttons[i].innerHTML=="Prev. Answer")
        _buttons[i].addEventListener("click",addPrevAnswer);

    else 
        _buttons[i].addEventListener("click", addToEquation);
}

function addToEquation(event) {
    if (equation.innerHTML === "Equation goes Here !") {
        equation.innerHTML = "";
    }
    equation.innerHTML += event.target.innerHTML;
}
function clearEquation (){
    equation.innerHTML="Equation goes Here !";
    result.innerHTML=" ";
}
function showResult () {
     if(eval(equation.innerHTML))
     result.innerHTML = eval(equation.innerHTML);
     equation.innerHTML="Equation goes Here !";
    
}
function addPrevAnswer () {
    if(result.innerHTML=="");
    equation.innerHTML="Equation goes Here !";
    equation.innerHTML= result.innerHTML;
}