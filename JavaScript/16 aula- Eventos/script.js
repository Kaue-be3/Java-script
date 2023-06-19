//Eventos
//No javascript, eventos são acões ou ocorrências que acontecem na página web que estamos implementando. Esses eventos geralmente invocam funcões que irão executar as opraçoes desejadas. Exemplo de evento: o usuario clicar em um botao na pagina.

/*Exemplos de eventos:
 - Clicar no mosuse
 - Quando a página é carregada
 - Quando uma imagem foi carregada
 - Quando o mouse passa sobre o elemento
 - Qunado um formulario HTML é enviado.*/
let muito = document.getElementById("muito")
let tema = document.getElementById("tema")
let radio1 = document.getElementById("radio1")
let radio = document.getElementById("radio2")
function mudar(){
    muito.innerHTML = 'São os melhores alunos de Santo amaro s2'
}
function carregar(){
    tema.style.backgroundColor = 'black'
    tema.style.color = 'white'
}
function carregarr(){
    tema.style.backgroundColor = 'white'
    tema.style.color = 'black'
}


//proxima parte
let demo = document.getElementById('demo')
function Data(){
    demo.innerHTML = Date();
}

function carregaraviso(){
    //alert('você acessou a página')
}
let obg = document.getElementById("obg")
function mudardefrase(){
    obg.innerHTML = 'Obrigado!';
}
function voltarafrase(){
    obg.innerHTML = 'Passe o mouse aqui!'
}