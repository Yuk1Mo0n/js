function calcular(){
    var numero1 = Number(document.getElementById("botao").value)
    var numero2 = Number(document.getElementById("botao2").value)

    var mais = (numero1) + (numero2)
    var menos =(numero1) - (numero2)
    var dobro = (numero1) * (numero2)
    var metade = (numero1) / (numero2)
    var resto = (numero1) % (numero2)
    var exponenciacao= (numero1) ** (numero2)

    document.getElementById("resultado").innerHTML = 
    `<br>${numero1} + ${numero2} = ${mais} 
    <br>${numero1} - ${numero2} = ${menos}
    <br>${numero1} * ${numero2} = ${dobro} 
    <br>${numero1} / ${numero2} = ${metade} 
    <br>${numero1} % ${numero2} = ${resto} 
    <br>${numero1} ** ${numero2} = ${exponenciacao} `
}