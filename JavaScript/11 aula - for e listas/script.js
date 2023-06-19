let x = document.getElementById("valorincio")
let y = document.getElementById("valorfinal")

function contar()
{
    while(parseInt(x.value) <= parseInt(y.value))
    {
        let paragrafo = document.createElement("p")                    
        let texto = document.createTextNode(x.value)                        
        paragrafo.appendChild(texto)                                       
        document.getElementById("contar").appendChild(paragrafo)           
        x.value++ //= (x + 1)
    }
}