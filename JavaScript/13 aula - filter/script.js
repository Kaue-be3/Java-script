let idade = [20, 19, 17, 18 , 27]
//filter() => o filtro criar uma vetor/array com o resultado do filtro aplicado pelo metodo, ou seja, os elementos que "passaram" na condiçao congurada no filtro

let mostrar = document.getElementById("demo")
mostrar.innerHTML = idade.filter(Maiordeidade)

function Maiordeidade(idade)
{
    return idade > 17;
}