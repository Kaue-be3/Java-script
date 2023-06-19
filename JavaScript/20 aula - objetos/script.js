let car = {
    nome: "fiat",
    cor: "roxo",
    modelo: "uno"
}
const aluno = {
    primeironome: "johan",
    segundonome: "carlos",
    Idade: 18,
    nacionalidade: "bolivia",
}

let mostrar = document.getElementById("mostrar")

mostrar.innerHTML = aluno.primeironome

const pessoas = {
    primeironome: "Brunão",
    segundonome: "Ruiz",
    id: 335214,
    fullnome: function(){
        return this.primeironome + " " + this.segundonome
    }   
}



//vetor

let cor = ["amarelo", "azul"]
const tarefas = 
[
    {
        id: 1,
        texto: 'levar o lixo para fora',
        completado: true,
    },
    {
        id: 2,
        texto: 'Encontrar com o chefe',
        completado: true
    },
    {
        id: 3,
        texto: 'consulta no dentista',
        completado: false
    },
    
]

tarefas.forEach(teste)
function teste(tarefas){
    console.log(tarefas.texto)
}
