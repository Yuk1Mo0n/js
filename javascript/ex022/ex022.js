var filmes = []
var img = []
var i = 0

function aaaa(){

    filmes.push (document.getElementById("nome").value)
    img.push (document.getElementById("imagem").value)


    if ( i < filmes.length){
        document.getElementById("coisas").innerHTML +=
            `
            ${filmes[i]} 
            
            <img src="${img[i]}" class="img"> 
            `
            i++
    }
}

