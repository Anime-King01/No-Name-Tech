document.getElementById("cbutton").onclick = function(){

a = document.getElementById("atextbox").value;
a = Number(a);

b = document.getElementById("btextbox").value;
b = Number(b);

c = Math.pow(a,2) + Math.pow(b,2);
c = Math.sqrt(c);

document.getElementById("clabel").innerHTML = "side c = " + c;
}

document.getElementById("submitbutton").onclick = function(){
    let temp;

    if(document.getElementById("ctext").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("temper").innerHTML = temp + "C"
    }
    else if(document.getElementById("ftext").checked){
        temp = document.getElementById("textbox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("temper").innerHTML = temp + "F"
    }
    else{
        document.getElementById("temper").innerHTML = "select a value";
    }
}

function toCelsius(temp){
    return (temp - 32) * (5 / 9);
}
function toFahrenheit(text) {
    return temp * 9 / 5 + 32;
}

