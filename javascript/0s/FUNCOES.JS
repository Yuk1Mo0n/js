//Chamando a função e passando o n° com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(3)
ricardoCalculeTabuada(9)
ricardoCalculeTabuada(240)

//  Função com entrada de Parametro e sem  retorno (sem saída de dados )
//  Criando a função para gerar no console a tabuada do NR desejada
function ricardoCalculeTabuada(nr){
    for (var i = 1; i <= 20; i++){
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}


//  Chamando função para calcular o dobro e receber o resultado na variavel
var resultado 
resultado = calcularDobro(9876)
console.log (resultado)

//   Declarendo a função recebendo o parâmetro e retornando um valor
function calcularDobro(nr) {
    var dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculando para a chamada

}

//  Criando uma função e recebendo 2 valores e retornando a media
function cacularMedia(nota1, nota2){
    var soma = nota1 + nota2
    var media = some / 2
    return media
}

//  Chamando uma função de calcular media 
var  MediaAluno1 = cacularMedia(9, 7)
console.log(`media do aluno um é ${MediaAluno1}`)
var MediaAluno2 = cacularMedia(6, 2)
console.log(`media do aluno um é ${MediaAluno2}`)

var login = 'admin'
var senha = '123'

function validarLogin(login, senha){
    if (login == '' || senha == ''){
        return false
    }else{
        
    }
}