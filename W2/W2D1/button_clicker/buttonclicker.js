function InOrOut(logstatus){
    if (logstatus.innerText == "Login"){
        logstatus.innerText = "Logout";
    }
    else{
        logstatus.innerText = "Login"
    }
}
function removeDef(element){
    element.remove();
}
