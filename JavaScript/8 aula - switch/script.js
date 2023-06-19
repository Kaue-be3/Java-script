let numero = document.getElementById("numero")
let resposta = document.getElementById("resposta")

function clicar(){
    switch(numero.value)
    {
        case "1":
            resposta.innerHTML = "Você escolheu a Maçã.";
            break
        case "2":
            resposta.innerHTML = "infelizmente você é pobre.";
            break
        default:
            respostae.innerHTML = "lembra não que tu é pobre?";
            break
    }
}
