function so(){ 
    var numero = Number(document.getElementById("text").value)

    var numera = 1
    while (numero <= 10) {
        document.getElementById("rere").innerHTML += `${numero}`
        numera++
    }
}