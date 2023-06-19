//addEventListerner()
/* elemennto = tags 
elemento.addEventListerner(tipo de evento,depois a função)*/

let botao = document.getElementById("mybtn")

botao.addEventListener('click', mudaralerta)
function mudaralerta(){
    alert("Hello mundo!")
}