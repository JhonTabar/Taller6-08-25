
function capturarDatos() {
    let horasTrabajadas = parseFloat(prompt("Ingrese el número de horas trabajadas:"));
    let horaInicio = parseFloat(prompt("Ingrese la hora de inicio (formato 24 horas):"));
    return {horasTrabajadas, horaInicio};
}


const esHorarioNocturno = (horaInicio) => {
    return horaInicio >= 22 || horaInicio < 6; 
};


function calcularSalario(horasTrabajadas, horaInicio) {
    const tarifaBase = 20000;
    let salarioTotal = horasTrabajadas * tarifaBase;

    if (esHorarioNocturno(horaInicio)) {
        salarioTotal *= 1.35; 
    }

    return salarioTotal;
}


function ejecutarPrograma() {
    const datos = capturarDatos();
    const salarioTotal = calcularSalario(datos.horasTrabajadas, datos.horaInicio);

    alert(`El salario total es: $${salarioTotal.toLocaleString('es-CO')}`);
    console.log(`El salario total es: $${salarioTotal.toLocaleString('es-CO')}`);
}


ejecutarPrograma();