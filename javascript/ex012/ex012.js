var nrSortedo = Number(parseInt(Math.random() * 100) + 1)
console.log(nrSortedo)

var tentativas = 0

function CU() {

    tentativas++
    var nr = Number(prompt('Escolha um numero?'))

    if (nr < nrSortedo) {
        document.getElementById("rere").innerHTML +=
            `Você chutou ${nr} pensei em um número MAIOR >:)<br>`
    } else if (nr > nrSortedo) {
        document.getElementById("rere").innerHTML +=
            `Você chutou ${nr} pensei em um número MENOR >:(<br>`
    } else if (nr == nrSortedo) {
        document.getElementById("rere").innerHTML +=
            ` <b>PARABENS VOCÊ ACERTOU ${nrSortedo} COM ${tentativas} TENTATIVAS >:D</b>`
    }
    if (tentativas > 6){
        alert("PERDEUUUU, era ${nrSortedo}")
    }

}    