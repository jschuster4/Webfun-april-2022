function changeName(){
    var newname = "Joel Schuster"
    document.querySelector(".name").innerHTML = newname;
}
function removeitem1(){
    document.querySelector(".picandname1").remove();
    document.querySelector("#conrequestnumber").innerHTML--
}
function removeitem2(){
    document.querySelector(".picandname2").remove();
    document.querySelector("#conrequestnumber").innerHTML--
    console.log(document.querySelector("#conrequestnumber").innerHTML);
}
