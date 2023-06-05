var nome = []
nome = JSON.parse(localStorage.getItem('bdusere'))
if (nome == null){
    nome = []
}
exibirUser()

function cadastro(){
    var user = document.getElementById('nome').value
    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var confirma = document.getElementById('senha2').value

    if (user == "" || login == "" || senha == ""){
        alert("Por favor, verifique que tem todos os itens preenchidos")
        exit
    }

    if(senha != confirma){
        alert("Sua senha não batem")
        exit
    }

    var coisasconta = {
        user: user,
        usuario: login,
        senha: senha
    }

    nome.push(coisasconta)
    localStorage.setItem('bdusere', JSON.stringify(nome))

    exibirUser()

}
function exibirUser(){
    document.getElementById('coisas').innerHTML = ''

//    for(var i in nome){
    
    nome.forEach ( ( item, pos ) => {
         
        document.getElementById('coisas').innerHTML +=
            `
            <b> Nome:</b> ${nome.user}
            //
            <b>Usuário:</b> ${nome.usuario}
            <img src='excluir.svg' onclick = excluir({pos})>
            <br>
            `
    })
 }

 function excluir(pos) {
    if ( confirm ('Deseja realmente excluir este usuário?')){

    nome.splice(pos, 1)
    localStorage.setItem('bdusere', JSON.stringify(nome))
    excluir()
    }
 }