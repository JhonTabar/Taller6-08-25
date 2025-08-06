// Casi que no encuentro como hacer esto, busque por 3 sitios 
function getRandomInt(min,max) {
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
}