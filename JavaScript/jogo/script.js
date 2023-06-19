let vidaHeroi
let ataquedoheroi
let xpheroi
let niveldoheroi
let classedoheroi = ["mago", "ninja", "viking"]
let nomedoheroi
let mensagemdonome


nomedoheroi = document.getElementById("nomedepersonagem")
mensagemdonome = document.getElementById("mensagem")

function enviar()
{
    if(nomedoheroi.value == ""){
        mensagemdonome.innerHTML = ("Me fale seu nome por favor para começamos.")
        return
    }
    mensagemdonome.innerHTML = "olá, " + nomedoheroi.value + ". Seja bem vindo ao jogo!"
    
}