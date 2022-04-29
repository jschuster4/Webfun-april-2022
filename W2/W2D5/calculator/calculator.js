var numbers = [0];
var i=0;
function press(numberPressed){
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText = numberPressed + "numbers[i]";
    numbers.push(numberPressed);
    i++
}
function setOP(operator){

}
