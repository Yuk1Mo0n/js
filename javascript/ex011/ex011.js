function resultado(){
    var nome = document.getElementById("nome").value
    var idade = Number(document.getElementById("idade").value)

    if ( idade >=16){
        document.getElementById("rere").innerHTML =
        `${nome}, você pode votar`
    } else{
        document.getElementById("rere").innerHTML =
        `${nome}, você não pode votar`
    }
    if (idade >=18){
        document.getElementById("rere").innerHTML =
        `${nome}, você é obrigado a votar`
    }
    if (idade >=65){
        document.getElementById("rere").innerHTML =
        `${nome}, você não é obrigado a votar`
    }
}    