//Declarando um array vazio
var meuVetor = []

//Criando vetores com dados
var numeros = [4, 1, 18, 2, 7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'SESI', true]

//Acessando os dados de um vetor
console.log( nomes[1] )
console.log( novoVetor[0] )

//Verificando o tamanho de um vetor
console.log(numeros.length)

//indice
var frutos = ['Maça', 'Laranja', 'Pera', 'Morango', 'Uva']
//faço um for para percorrer todo o tamanho do vetor
for (var i=0; i < frutos.lergth; i++){
    //Coloco o 'i' no indice das frutas para pegar o  
    // valor de cada indice do vetor
    console.log( frutos[i] )
}

//Adicionando novo valor no final FINAL do vetor
frutos.push ('Abacaxi')
console.log( frutos.length)
console.log( frutos )

var novaListaFrutas = []    //[]
novaListaFrutas.push ('Limão')
console.log(novaListaFrutas)    //['limão']
novaListaFrutas.push('Melancia') 
console.log(novaListaFrutas)    //['Limão', 'Mrlancia']

novaListaFrutas[0] = 'Melão'
console.log(novaListaFrutas) //['Melao', 'Melancia']
novaListaFrutas[0] = 'Banana'
console.log(novaListaFrutas) //['Limão', 'Banana']
novaListaFrutas[0] = 'Melancia'
console.log(novaListaFrutas) //['Limão', 'Banana', 'Melancia']


for (var i=0; i < frutos.lergth; i++){
    console.log( frutos[i] )
}

//for in -> não precisa inicializar uma variavel de contador do loop
for (var indice in novaListaFrutas){
    console.log (indice + ' - ' + novaListaFrutas[indice])
}

//metodo forEach de um vetor percorre e retorna todos os elementos do vetor
novaListaFrutas.forEach( frutos => {
    console.log(fruta)  
})

// var.forEach é um vetor q pega um item
// dentro de seu parenteses tem uma var junto => {}
// e dentro dele tera a informação do que sera execultada 

frutos.forEach ( item => { 
    console.log ( 'Item pelo forEach', item )
 } )

 frutos.forEach ( (item, pos ) => { 
    console.log ( 'Item pelo forEach com pocição', item )
 } )