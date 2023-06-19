let recebervalor = document.getElementById("recebervalor")
let resultado = document.getElementById("parouimpar")
var btn = document.querySelector("#refresh");

btn.addEventListener("click", function() {
    
    location.reload();

})
function PAR()
{
    if(recebervalor.value  % 2 == 0){
        resultado.innerHTML = "par"
    }else{
        resultado.innerHTML = "impar"
    }
}
