
var kn = 0; kn = document.getElementById("kn").value;
var f = 0; f = document.getElementById("f").value;
var k = 0; k = document.getElementById("k").value/100;
var r = 0; r = document.getElementById("r").value/100;
var m = 0; m = document.getElementById("m").value;
var n = 0; n = document.getElementById("n").value;

var v = 0;


for (let i = 1; i < (m*n+1); i++) {
    v = v + (((kn*k)/m)/((1+(r/m))**i));
}

v = v + (f/((1+(r/m))**(n*m)));


function his() {
    document.getElementById("v").innerHTML = "Nominal bahosi V=" + v;
}

