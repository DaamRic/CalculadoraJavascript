//Calculadora

//Funcion para calcular
function calcular(operacion, primerNumero, segundoNumero) {
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
        alert("Operacion erronea");
        break;
    }
    
    return resultado;
  }

  //funcion repetircalculadora
  function repetirCalculadora(){

  //Le solicitamos los numeros al usuario
  const primerNumero = parseInt(prompt("Ingrese el primer número:"));
  const operacion = prompt("Ingrese la operacion que desea realizar: (+ , - , * , /):");
  const segundoNumero = parseInt(prompt("Ingrese el segundo número:"));
  
  // calculamos el numero
  const resultado = calcular(operacion, primerNumero, segundoNumero);
  
  // mostramos el resultado
  alert("El resultado es: " + resultado);

  // Le preguntamos al usuario si quiere continuar o salir
  const repetir = prompt("¿Desea realizar otra operación? (S/N)").toLowerCase();

  //If para repetir o finalizar
  if (repetir === 's') {
    repetirCalculadora();
  } else if (repetir === 'n') {
    alert("Calculadora finalizada.");
  } else {
    alert("Opcion invalida , Calculadora finalizada.");
  }
  }

// repetir
repetirCalculadora();
