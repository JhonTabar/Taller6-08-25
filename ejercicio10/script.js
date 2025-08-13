function obtenerNotas() {
   let pregunta1 = prompt("Ingrese la nota de la primera pregunta:");
   let pregunta2 = prompt("Ingrese la nota de la segunda pregunta:");
   let pregunta3 = prompt("Ingrese la nota de la tercera pregunta:");
   let pregunta4 = prompt("Ingrese la nota de la cuarta pregunta:");
   let pregunta5 = prompt("Ingrese la nota de la quinta pregunta:");
   return (parseInt(pregunta1) + parseInt(pregunta2) + parseInt(pregunta3) + parseInt(pregunta4) + parseInt(pregunta5)) / 5;
}

function recuperacion() {
   alert("Evaluacion fallada. Evaluacion de recuperacion preparada");
   let recpreg1 = prompt("Ingrese la nota de la primera pregunta: ");
   let recpreg2 = prompt("Ingrese la nota de la segunda pregunta: ");
   let recpreg3 = prompt("Ingrese la nota de la tercera pregunta: ");
   let recpreg4 = prompt("Ingrese la nota de la cuarta pregunta: ");
   let recpreg5 = prompt("Ingrese la nota de la quinta pregunta: ");
   return (parseInt(recpreg1) + parseInt(recpreg2) + parseInt(recpreg3) + parseInt(recpreg4) + parseInt(recpreg5)) / 5;
}

function calculoNotas() {
   let promedioInicial = obtenerNotas(); // Get the average of the first set of notes
   if (promedioInicial >= 3) {
      console.log("Pasastes!");
   } else {
      let promedioRecuperacion = recuperacion(); // Get the average of the recovery notes
      if (promedioRecuperacion >= 3) {
         console.log("Pasastes!");
      } else {
         console.log("Reprobastes");
      }
   }
}

calculoNotas(); // This will run the whole process