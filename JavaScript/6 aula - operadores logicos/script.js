let idade = document.getElementById("idade")
let titulo = document.getElementById("titulo")
let resultado = document.getElementById("resultado")

function Aperta()
{
    if(idade.value >= 16 && titulo.value == "Sim")
    {
        alert("você poderá votar")
    }
    else
    {
        alert("não podera votar")
    }
}

let minutos;
let preco;

if(minutos <= 200 )
{
    preco = 0.20
}
else{
    if(minutos <= 400){
        preco = 0.18
    }
    else{
        preco = 0.15
    }
}