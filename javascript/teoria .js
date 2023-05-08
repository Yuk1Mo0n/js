        /*
        comentarios em
        muitiplas linhas
        */
       //Comentário em uma única linha

        //O alert é utilizado para exibir uma pequena mensagem em popup
        //*alert( "OLÁ MUNDOOOOOOO!!!!" )*

        //No console conseguimos visualizar informações_
        //_sem exibir na página
        console.log("OLÁ MUNDOOOOOOO!!!! Utilizando Console")   

        function BotaoTeste(){
            alert("Você clicou no botão")
        }

        //Tipo de exibição de mensagem no console
        console.error("Está é uma mensagem de erro")
        console.warn("Está é uma mensagem de alerta")
        console.info("Está é uma mensagem de informação")

        function BotaoNome(){
             var nome2 = prompt('Qual é o seu nome?')
             confirm(`Olá ${nome2}, entendeu JS?`)
        }
        //prompt=caixa que pode receber algum item


        function Botaonumero(){
            //Recebendo valor1 de um prompt
            var valor1 = prompt("Escolha um número ai rapidinho irmão")
            console.log(typeof valor1)

            //Recebendo valor2 de um prompt
            var valor2 = prompt("Mais um meu bom")

            //Variável soma recemendo valor1 + valor2
            var soma = Number(valor1) + Number(valor2)

            //Exibir em um alert o valor de soma
            //    alert (soma)


            //Alterando um elemento buscando ele pelo ID e alterando
            //o conteúdo HTML, o elemento pelo ID resultandoSoma e 
            //Alterar o conteúdo do HTML pela string
            document.getElementById("resultadoSoma").innerHTML +=
            `<br> A soma dos números ${valor1} + ${valor2} é = ${soma}`
        }

        function ExibirCidade(){

            var nomeCidade = document.getElementById("cidade").value
            document.getElementById("resultadoCidade").innerHTML = nomeCidade

        }

//Operandores Aritméticos e Ordem de precedência 
var opSoma = 5 + 2//Operador de soma
console.log(opSoma)//7
var opSubtração = 5 - 2//Operador de subtração
console.log(opSubtracao)//3
var opMultiplicacao = 5 * 2//Operador de multiplição
console.log(opMultiplicacao)//10
var opDivisao = 5 / 2//Operador de divisão
console.log(opDivisao)// 2.5


var opExponenciacao = 5 ** 2//Operador de exponenciação **
console.log(opExponenciacao)// 25
var opResto = 5 % 2//Operador de resto da divisao
console.log(opResto)// 1

//Ordem de precedencia
var opPrecedencia1 = 5 + 3 - 2
console.log(opPrecedencia1)// 6.5
var opPrecedencia2 = (5 + 3) /2
console.log(opPrecedencia2)//4

/*
    1º ()
    2º **
    3º * /
    4º %
    5º + -
*/

//Contantes - o valor não pode ser alterado depois de atribuído
const pi = 3.14
//pi = 3 - Se o valor dor alterado dará erro no javascript




        











            //Declarando variáveis
        //String - Todo número em JS é do tipo Number - com ("") ou ('')
        var nome = "Yasmin"
        var sobrenome = "Ferreira"
        //Number - Todo número em JS é do tipo Number - Declarar sem ("")
        var idade = 16
        //Boolean - Somente recebe true ou false
        var aprevado = true 
        console.log (typeof nome) //Comando typeof para saber o tipo do dado

        console.log(nome + ' ' + sobrenome ) //Concatenando strings com o + 
        //Se utilizarmos o + com string ele concatena se utilizar com number

        var n1 = 10
        var n2 = 25
        console.log(n1 + n2) //Irá somar as 2variaveis number (35)
        var n3 = "10"
        var n4 = "25"
        console.log(n3 + n4) //Irá concatenar "juntar" as 2 variáveis ("1025")

        n1 = n2 //Uma variável pode receber o valor de outra variável
        console.log("n1 = " + n1 + ' e o n2 = ' + n2)

        var salario = 1290.85 //Para atribuir um valor decimal utilizar, 'não'.
        salario = salario + 200 //Posso também somar a variável com ela mesmo
        console.log(salario)
        salario += 200 //Representação mais simplificada da expressão acima
        console.log(salario)

        //Antigamente para juntar texto e variáveis faziamos asism
        console.log('Olá, ' + nome + 'você tem' + idade +'anos e recebe R$' + salario)
        //Hoje utiliazmos o TemplateString forma mais simples 
        console.log(`Olá, ${nome} você tem ${idade} anos e recebe  R${salario}`)

