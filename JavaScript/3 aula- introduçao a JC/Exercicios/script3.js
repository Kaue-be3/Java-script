var metros = document.getElementById("metros");
var resultado = document.getElementById("resultado");
var centimetros = 100;
var soma;
function soma()
{
    soma = parseInt(metros.value) * centimetros
    resultado.innerHTML = soma
}