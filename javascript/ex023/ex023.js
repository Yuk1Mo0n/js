function resultado(){
    var nome = document.getElementById("nome").value
    var nota1 = Number (document.getElementById("notaa").value)
    var nota2 = Number (document.getElementById("notab").value)
    var resuno = (nota1 + nota2) / 2

    if ( Number(nota1) > 10){
        alert("Notas não aceita, coloque menor que 10")
        exit
    }
    if ( Number(nota2) > 10){
        alert("Nota 2 não aceita, coloque menor que 10")
        exit
    }


    if (resuno >= 6){
        document.getElementById("rere").innerHTML =
        `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média foi ${resuno} <br> <b> PASSOU DE ANO </b>`
    }
    else {
        document.getElementById("rere").innerHTML =
        `O aluno ${nome} tirou nota ${nota1} e ${nota2} sua média foi ${resuno} <br> <b> NÃO PASSOU DE ANO </b>`
    } 

}
