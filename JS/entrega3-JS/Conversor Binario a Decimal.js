"use strict";
function BinaryConverter(str) {
  let decimal = parseInt(str, 2);
  return decimal;
}
console.log(BinaryConverter("1000"));

/* parseInt(string, base);

Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
string:Una cadena que representa el valor que se desea convertir.
base:Un entero que representa la base de la mencionada cadena.

Informacion de MDN
*/

//Esta seria la forma menos eficiente:

function BinaryConverter2(str) {
  let arrayValores = str.split("");
  let acumulador = 0;
  for (let i = 0; i < arrayValores.length; i++) {
    acumulador =
      acumulador +
      parseInt(arrayValores[i]) * Math.pow(2, arrayValores.length - (i + 1));
  }
  return acumulador;
}

console.log(BinaryConverter2("1000"));

//En ambos casos el valor que devuelven las funciones es tipo number
