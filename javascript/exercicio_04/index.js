let namePiloto = prompt("Digite o nome do piloto: ")
let velocity = 0 
let newVelocity = prompt("A que velocidade você gostaria de acelerar? ")

let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "Km/s")

if(confirmVelocity) {  // Atualizando a velocidade. 
    velocity = newVelocity
}

if(velocity <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
    alert("Você está devagar. Podemos aumentar mais.")
} else if (velocity < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocity < 100) {
    alert("Velocidade alta. Considere diminuir.")
} else {
    alert("Velocidade perigosa. Controle automático forçado.")
}

    alert("Piloto: " + namePiloto + "\nSua Velocidade atual:Je " + velocity + "Km/s")