function so(){
    document.getElementById("rere").innerHTML =""
    var nruuu = 1
    while (nruuu <= 6) {
        var sorte = parseInt(Math.random() *60) +1
        document.getElementById("rere").innerHTML += `${sorte}`
        sorte++
    }
}