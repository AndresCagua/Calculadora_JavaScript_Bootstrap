console.log('Aplicación Calculadora');
const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    

function sumar(){
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function restar(){
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function multiplicar(){
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}
function dividir(){
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}