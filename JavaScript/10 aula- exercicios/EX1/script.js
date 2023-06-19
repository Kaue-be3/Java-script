let numero = document.getElementById("numero")
let resultado = document.getElementById("resultado")

function clicar(){
    switch(numero.value){
        case "1" :
            resultado.innerHTML = "Final de Semana";
            break
        case "2":
            resultado.innerHTML = "Dia útil";
            break
        case "3":
            resultado.innerHTML = "Dia útil";
            break
        case "4":
            resultado.innerHTML = "Dia útil";
            break
        case "5":
            resultado.innerHTML = "Dia útil";
            break
        case "6":
            resultado.innerHTML = "Dia útil";
            break
        case "7" :
            resultado.innerHTML = "Final de Semana";
            break
        default:
            resultado.innerHTML = "dia invalido";
            break
        
    }
}


let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let resultada = document.getElementById("resultada");
var soma
var subtracao
var multiplicacao
var divisao

function soma()
{
    soma = parseInt(n1.value) + parseInt(n2.value);
    resultada.innerHTML = soma;
}

function subtracao(){
    subtracao = parseInt(n1.value) - parseInt(n2.value)
    resultada.innerHTML = subtracao;
}

function multiplicacao(){
    multiplicacao = parseInt(n1.value) * parseInt(n2.value)
    resultada.innerHTML = multiplicacao
}

function divisao(){
    divisao = parseInt(n1.value) / parseInt(n2.value)
    resultada.innerHTML = divisao
}

var btn = document.querySelector("#refresh");

btn.addEventListener("click", function() {
    
    location.reload();

});
