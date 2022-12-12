function sumatoria() {
    let resultado = parseInt(numero1) + parseInt(numero2);
    console.log(resultado);
  }
  
  function resta(atributoA, atributoB) {
    let resultado2 = parseInt(atributoA) - parseInt(atributoB);
    console.log(resultado2);
  }
  
  function product() {
    let resultado3 = parseInt(numero1) * parseInt(numero2);
    return resultado3;
  }
  
  function division(atributoAa, atributoBb) {
    let resultado4 = parseInt(atributoAa) / parseInt(atributoBb);
    return resultado4;
  }
  
  if (Operacion === "+") {
    sumatoria();
  } else if (Operacion === "-") {
    resta(numero1, numero2);
  } else if (Operacion === "*") {
    console.log(product());
  } else if (Operacion === "/") {
    console.log(division(numero1, numero2));
  } else {
    console.log("No reconozco esa operacion");
  }
  