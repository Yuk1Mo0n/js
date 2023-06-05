function resultado(){
    var nome = document.getElementById("nome").value
    var idade = Number(document.getElementById("idade").value)

    if ( idade >= 18){
        document.getElementById("rere").innerHTML =
        `<b> PARABÉNS ${nome}, você pode tirar CNH </b>
        <img src="https://64.media.tumblr.com/ef671c8916d6f12fb10487060a8e7166/5b1c387ab0e9209a-f2/s1280x1920/be0693a79fddb5c6b5dae21d849942b788a407c8.gifv" class="aaa"> ☺`
    }
    else {
        document.getElementById("rere").innerHTML =
        `<b> PARABÉNS ${nome}, você NÃO pode tirar CNH </b>
        <img src="https://media.tenor.com/oNzbYT8uZj4AAAAC/tbh-white-creature.gif" class="aaa">☺`
    }

}
