// Casi que no encuentro como hacer esto, busque por 3 sitios 
/** function getRandomInt(min,max) {
return Math.floor(Math.random() * (max- min + 1) + min)
}

let numGuess= prompt("Adivine un numero desde 1 al 10: ")
console.log("Tu numero es: ") 
console.log(parseInt(numGuess));

let numGen = getRandomInt(1,10)
console.log("El numero ganador es: ", numGen); 


if( numGen === parseInt(numGuess)){
console.log("Felicidades! Lo adivinaste!")
} else if( numGen !== numGuess) {
console.log("Adivinastes mal!")
} **/




function texto(reglas){
return reglas = alert( "Debes de adivinar un número secreto del 1 al 10. Tienes 3 intentos. Si lo adivinas, ganas; si no, pierdes." )
}



function Juego() {    
let guessCount = 0
const secNum = 7
while (guessCount < 3){
let guess = prompt("Adivine un numero desde 1 al 10: ");
console.log("Tu numero era: ") 
console.log(parseInt(guess))

if (secNum === parseInt(guess)){
    let happy = () => {
  return "Adivine un numero desde 1 al 10: ";}
    return;
} else {
    guessCount += 1;
    if (guessCount >= 3) {
     console.log("Perdistes el juego!")
    }else{ 
    console.log("Tienes otro intento.")
     }
}
}
}

let reglasjuego = texto() 
Juego()

