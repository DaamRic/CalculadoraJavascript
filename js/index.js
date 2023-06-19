//Calculadora


function calcular(operacion, primerNumero, segundoNumero) {//funcion para calcular
  let resultado = 0;

  switch (operacion) {
    case '+':
      resultado = primerNumero + segundoNumero;
      break;
    case '-':
      resultado = primerNumero - segundoNumero;
      break;
    case '*':
      resultado = primerNumero * segundoNumero;
      break;
    case '/':
      resultado = primerNumero / segundoNumero;
      break;
    default:
      alert("Operacion invalida");
      break;
  }

  return resultado;
}


function ejecutarCalculadora() { //funcion para ejecutarla
  const resultados = [];

  while (true) {
    const primerNumero = parseInt(prompt("Ingrese el primer numero:"));
    const operacion = prompt("Ingrese que operacion desea realizar: (+, -, *, /):");
    const segundoNumero = parseInt(prompt("Ingrese el segundo numero:"));

    const resultado = calcular(operacion, primerNumero, segundoNumero);
    resultados.push(resultado);

    alert("El resultado es: " + resultado);

    const repetir = prompt("¿Desea realizar otra operacion? (S/N)").toLowerCase();

    if (repetir === 'n') {
      break;
    } else if (repetir !== 's') {
      alert("Opcion invalida. Calculadora finalizada");
      break;
    }
  }

  return resultados;
}

//Ejecutamos para obtener el resultado
const resultadosCalculadora = ejecutarCalculadora();

//Usando map mostramos el resultado de todas las operaciones que ha realizado en la consola segun el orden al finalizarla
console.log("El resultado es: ");
resultadosCalculadora.map((resultado, indice) => {
  console.log(`Operación ${indice + 1}: ${resultado}`);
});