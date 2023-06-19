//Existem duas formas de criar vetores:

const num1 =  new Array
(10,-1,3,3,121)
//ou assim
const num2 = [-2,40,16,111,33,64]
console.log(num1)
console.log(num2)

//acessando elementos diversos dos arrays

//acesse o terceiro elemento do num1
console.log( num1[2])
//acesse o quinto elemento do num2
console.log( num2[4])
//também é possivel soma a "[]" com outra "[]", usando a seguinte formular:
console.log( num1[0] + num2[4])
//arrays bidimensionais
console.clear()


const matrix = [
    ['banana', 'maçã', 'pêra'],
    ['laranja', true, 1],
    [null, "uva", -350],
]
console.log(matrix)
console.log(matrix[0][1])
console.clear()

//alterar um valor do array
let moeda = ['real', 'dolar', 'coroa', 'peso']
console.log(moeda)
moeda[1] = 'Yen'
console.log(moeda)

let matrix2 = [
    [1,2,3],
    [4,5,6],
]
matrix2[0][1] = '10'
console.log(matrix2)

//Tamanhos de arrays
let vetor = [0,1,2,3,4]
console.log(vetor.length)

//Remover e/ou colocar elementos 
//pop() <- remove o ultimo elemento
const frutas = ["laranja", "banana", "manga"]
let x = frutas.pop()

console.log(frutas)
console.log(x)

//shift <- remover o primeiro elemento
let y = frutas.shift()
console.log(frutas)

//delete <- remove qualquer elemento
const veiculos = ["carro", "barco", "moto"]
delete veiculos[1]
console.log(veiculos)

//push <- inserir um elemento
let z = veiculos.push("aviao")
console.log(veiculos)