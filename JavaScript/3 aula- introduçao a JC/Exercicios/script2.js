var dolar = document.getElementById("dolar")
var converçao = document.getElementById("converçao")
var real = 4.50;

function soma()
{
    soma = parseInt(dolar.value) * real;
    converçao.innerHTML = soma
}