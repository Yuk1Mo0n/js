var Filmes = []

function filmes(){
    var nome = document.getElementById("nome").value
    filmes.push (nome)
    document.getElementById("filmes").innerHTML = ''

    for (var i = 0; i < filmes.length ; i++){
        document.getElementById('coisas').innerHTML +=
            `${filmes} <br>`
    }
}

