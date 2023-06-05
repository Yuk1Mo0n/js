function resultado(){
    var nome = document.getElementById("nome").value
    var senha = Number(document.getElementById("senha").value)

    if (nome == "aceso" && senha == "aceso"){
        document.getElementById("rere").innerHTML =
        `<b class="aaa"> PARABÉNS ${nome}, você validou e entrou no sistema  </b>
        <img src="https://64.media.tumblr.com/ef671c8916d6f12fb10487060a8e7166/5b1c387ab0e9209a-f2/s1280x1920/be0693a79fddb5c6b5dae21d849942b788a407c8.gifv">`
    }
    else {
        document.getElementById("rere").innerHTML =
        `<b class="bbb"> Usuário ou senha inválido </b>
        <img src="https://media.tenor.com/oNzbYT8uZj4AAAAC/tbh-white-creature.gif" class="aaa">`
    }
}
