// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  largo = array.length;
  return largo;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let array2 = array.map(function (elemento) {
    return elemento + 1;
  });
  return array2;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  let array2 = array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  let array2 = array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = palabras[0];
  i = 1;
  while (i < palabras.length) {
    frase = frase + " " + palabras[i];
    i++;
  }
  return frase;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let pos = array.indexOf(elemento);
  if (pos !== -1) {
    return true;
  } else if (pos === -1) {
    return false;
  }
}

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let valor = 0;
  for (i = 0; i < numeros.length; i++) {
    valor = valor + numeros[i];
  }
  return valor;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let notas = 0;
  for (i = 0; i < resultadosTest.length; i++) {
    notas = notas + resultadosTest[i];
  }
  totales = resultadosTest.length;
  promedio = notas / totales;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  e = 0;
  let masGrande = numeros.map(function (numero) {
    if (numero > e) {
      e = numero;
    }
  });
  return e;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let e = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else if (arguments.length > 1) {
    for (i = 0; i < arguments.length; i++) {
      e *= arguments[i];
    }
    return e;
  }
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  e = 18;
  mayores = 0;
  let masGrande = arreglo.map(function (params) {
    if (params > e) {
      mayores++;
    }
  });
  return mayores;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí

  if (numeroDeDia === 7 || numeroDeDia === 1) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  n = n.toString();
  if (n[0] === "9") {
    return true;
  } else if (n[0] !== "9") {
    return false;
  }
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  e = arreglo[0];
  i = 0;
  let value = arreglo.map(function (params) {
    if (params === e) {
      i++;
    }
  });
  if (i === arreglo.length) {
    return true;
  } else {
    return false;
  }
}

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let array2 = [];
  i = 0;
  let mapeo = array.map(function (found) {
    if (found === "Enero" || found === "Marzo" || found === "Noviembre") {
      array2.push(found);
      i++;
    }
  });
  if (i >= 3) {
    return array2;
  } else if (i < 3) {
    return "No se encontraron los meses pedidos";
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayores = [];
  let n = array.map(function (num) {
    if (num > 100) {
      mayores.push(num);
    }
  });
  return mayores;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let valor = [];
  let a = numero;
  for (i = 0; i < 10; i++) {
    a = a + 2;
    valor.push(a);
    if (a === i) {
      return "Se interrumpió la ejecución";
    }
  }
  return valor;
}

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:

  var valore = [];
  for (i = 0; i < 10; i++) {
    if (5 === i) {
      continue;
    }
    numero = numero + 2;
    valore.push(numero);
  }
  return valore;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
