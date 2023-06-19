var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var media = document.getElementById("media");
var soma;

function soma()
{
    soma = (parseInt(p1.value) + parseInt(p2.value) + parseInt(p3.value) + parseInt(p4.value) )/4;
    media.innerHTML = soma
}