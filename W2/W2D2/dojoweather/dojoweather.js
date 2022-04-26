function getridof(element){
    element.remove();
}

var tempArray = [24,18,27,19,21,16,26,21]

function changetemps1(){
    for(var i=0; i<tempArray.length; i++){
        tempArray[i] = tempArray[i] * 9/5 + 32;
        console.log(tempArray);
    }
    document.querySelector("#temp1h").innerHTML = tempArray[0]+ "˚";
    document.querySelector("#temp1l").innerHTML = tempArray[1]+ "˚";
    document.querySelector("#temp2h").innerHTML = tempArray[2]+ "˚";
    document.querySelector("#temp2l").innerHTML = tempArray[3]+ "˚";
    document.querySelector("#temp3h").innerHTML = tempArray[4]+ "˚";
    document.querySelector("#temp3l").innerHTML = tempArray[5]+ "˚";
    document.querySelector("#temp4h").innerHTML = tempArray[6] + "˚";
    document.querySelector("#temp4l").innerHTML = tempArray[7] + "˚";
}