let idade = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let resultado = document.getElementById("resultado")
let numero = document.getElementById("numero")

function Maiordeidade(idade)
{
    return idade > numero.value
}

function retornar()
{
    resultado.innerHTML = idade.filter(Maiordeidade)
}

    



