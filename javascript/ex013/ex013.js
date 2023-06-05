function R(){
    var dia = parseInt(Math.random() *13)
    var nome = document.getElementById("a").value
    switch (dia){
        case 1: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Janeiro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break
        case 2: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Fevereiro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break   
        case 3: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Março <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif"> `
             break    
        case 4: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Abril <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break    
        case 5: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Maio <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break   
        case 6: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Junho <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break    
        case 7: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Julho <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break    
        case 8: 
        document.getElementById("rere").innerHTML =`${nome}VAI CASAR em Novembro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break    
        case 9: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Setembro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break
        case 10: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Outubro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break   
        case 11: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Novembro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break    
        case 12: 
        document.getElementById("rere").innerHTML = `${nome}VAI CASAR em Dezembro <img src="https://i.pinimg.com/originals/8f/18/4c/8f184c4c1209c68ce540a3b04c534c01.gif">`
             break 
        case 13: 
        document.getElementById("rere").innerHTML = `${nome}TÁ QUASE >:) <img src="https://i.pinimg.com/564x/34/31/66/34316685b4bae49f16a3b27ba267b8fe.jpg">`
             break
             default:   
        case 14: 
        document.getElementById("rere").innerHTML = `${nome} NÃO VAI :D <img src="https://i.pinimg.com/originals/01/fb/d0/01fbd07f5a7eb6873f0c6659a23857ae.gif">`
             break     
    }

}