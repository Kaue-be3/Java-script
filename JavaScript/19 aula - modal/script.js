let btn = document.getElementById("mybtn")
let modal = document.getElementById("mymodal")
let span = document.getElementsByClassName("close")[0]

btn.addEventListener("click", abrir)
function abrir(){
    modal.style.display = "block"
}
span.addEventListener("click", fechar)
function fechar(){
    modal.style.display = "none"
}