function I(){
    //entrada
    var numero = document.getElementById("botao").value
    //processamento
    var dobro = numero *2
    var metade = numero /2
    //saida
    document.getElementById("resultado").innerHTML =
    `O dobro de ${numero} é ${dobro} e a metade é ${metade} <br>`
}

function E(){
    document.getElementById("resultado").innerHTML = " "
}