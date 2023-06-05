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

    //Auto atribuição
    var n = 3
    n = n + 3 //a variavel recebe ela mesmo + 3
    n += 3    //quer dizer p mesmo que a expressão acima 

    n++ //quando precisamos somar + 1 ao valor da variavel

    //Operadores Relacionais 
    var n1 = 5
    var n2 = 6
    console.log (n1 > n2) // > Maior que
    console.log (n1 < n2) // < Menor que
    console.log (n1 >= n2) // >= Maior ou igual que
    console.log (n1 <= n2) // <= Menor ou igual que
    console.log (n1 == n2) // == Igual 
    console.log (n1 != n2) // != Não igual - Diferente

        //Estruturas condicionais
        if (n1 > n2) {      //Verificando a condição entre parenteses
        //Se a condição for verdadeira "entre" nesse bloco
        console.log("O n1 é maior que o n2")
    } else {    
            //Se a condição NÃO for verdadeira "entre" nesse bloco ELSE
            console.log("O n1 não é maior que o n2")
    }
    //Exemplo de condição
    var minhaIdade = 15 
    if (minhaIdade >= 16){
    console.log("Você pode votar")
    } else {
        console.log("Você NÃO pode votar")
    }


    //Operadores Lógicos
    //&& representa o E 
    var login = "adm"
    var senha = "123"
    //Para entrar na condição TRUE as 2 condições precosar ser verdadeira
    if(login == "adm" && senha == "123"){
        //Executa esse bloco quando as condições são TRUE
    } else {
        //Executa esse bloco se pelo menos 1 condição for FALSE 
    }

    var media = 6
    // Operador OU -> || (pipe)
    //Para entrar na condição TRUE pelo menos 1 condiação precisa se verdade


    //Estruturas condicionais encadeadas
    if (media >= 7){
        //APROVADO
    }else if (media >= 5) { // Podemos fazer um novo if junto com o else
        console.log("RECUPERAÇÃO")
    }else if (media >= 5) { 
        console.log("REPROVADO")
    }

    //debugger
    //Podemos utilizar o debugger para analisar o codigo linha a linha 

    //exit 
    //Quando queremos parar de executar um função do JS utilizamos o exit
    

    //Para sortearmos um valor aleatorio utilizamos o Math.random()
    //O Marth,random retorna um numero decimal e precisamos multicar pelo nr 
    //maximo que desejarmos e somar 1 quando necessario
    //o parseInt utilizamos para obter apenas a parte interna do numero 

    var nrSortedo = parseInt(Math.random()*100) +1
    console.log(nrSortedo)


    //Switch Case
    //É como se fosse vários if else se forma mais simples 
    var diaSemana = 3 
    switch (diaSemana){
        case 1: 
            console.log("Hoje é: Domingo")
             break   //para o swich case e não verifica as outras opções
        case 2: 
            console.log("Hoje é: Segunta")
             break   
        case 3: 
            console.log("Hoje é: Terça")
             break    
        case 4: 
            console.log("Hoje é: Quarta")
             break    
        case 5: 
            console.log("Hoje é: Quinta")
             break   
        case 6: 
            console.log("Hoje é: Sexta")
             break    
        case 7: 
            console.log("Hoje é: Sabado")
             break    
        case 8: 
            console.log("Hoje é: Sabado")
             break    
        
    }

    // Laços de repetição ( que quer dizer enquanto)
    //While (condição)
    //enquanto a condição do parentese for verdeira
    //continua repetindo o codigo do bloco
    
    var nrVidas = 5
    while( nrVidas>0){
    
        console.log('VOCE AINDA TEM ${}')
    }

    //Verifincado se numero é par com while
    var contador = 1 //iniciando o contador de vezes que irá executar 
    while (contador <= 10) { //Enquento a condoção for verdadeira
        if(contador % 2 == 0){ //Condição para o contador for par
            console.log (`${contador} é par `)
        }   else{ 
            console.log (`${contador} é impar `)
        }
        contador++ //Adicionamos +1 ao contaodr para não ficar em loop
    }

    var cont = 1
    while (cont <= 5){
        console.log (cont)
        cont++
    }
    for (var cont = 1; cont <= 5; cont++){
        console.log(cont)
    }

    //For - Laço de repetição
    // 1ª Expressãovar i = 1
    // (Aqui eu inicio o controle de vezes)
    // 2ª Expressão i <= 10
    // (Aqui nós verificamos a condição para se
    // manter no loop)
    // 3ª Expressão i++
    // (Aqui acrescentamos na variável +1 vez)
    // Exibindo
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }