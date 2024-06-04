var Leornado = window.document.getElementById("Leornado")
var Samanta = window.document.getElementById("Samanta")
var Bruna = window.document.getElementById("Bruna")

function ParaBaixo(){
    Bruna.style = "display:none"
    Samanta.style = "display:none"
    Leornado.style = "display:flex"
}
function ParaCima(){
    Bruna.style = "display:flex"
    Samanta.style = "display:none"
    Leornado.style = "display:none"
}

