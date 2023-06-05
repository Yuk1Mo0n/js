var listafilme = []

listafilme = JSON.parse(localStorage.getItem('bdFilmes'))
if (listafilme == null){
    listafilme = []
}
exibirFilmes()

//Exibindo no console a lista de filmes que carregou no vetor
console.log(listafilme)

function validarCadastro(nome2, imagem2){
    if (nome2 != '' && imagem2 != '') {
        return true
    } else {
        return false
    }
}

function botaoFilme() {
    var nomeFilme = document.getElementById("nome").value
    var imagemFilme = document.getElementById("imagem").value
    
    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if (possoCadastrar == false) {
        alert ('Verifique os dados antes de cadastrar')
        return 
    }
    
    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }
    listafilme.push(filme)

 //ele continua lembrando mensmo que reenicie a pagina

    localStorage.setItem( 'bdFilmes', JSON.stringify(listafilme) )

    exibirFilmes()

    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}

function botaoIndicado(){
    var nrSorteado = parseInt(Math.random() * listafilme.length)
    document.getElementById('indicado').innerHTML = 
        `<div>
            <img src='${listafilme[nrSorteado].link}' class='img'> 
            <p>${listafilme[nrSorteado].nome}</p>
        </div>`
}

function exibirFilmes(){
    document.getElementById('coisas').innerHTML = ''

    for (var i in listafilme) {
        document.getElementById('coisas').innerHTML +=
            `<div>
                <img src='${listafilme[i].link}' class='img'> 
                <p>${listafilme[i].nome}</p>
            </div>`
    }
}

function botaoLimpar(){
    listafilme = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listafilme) )
    exibirFilmes()
}