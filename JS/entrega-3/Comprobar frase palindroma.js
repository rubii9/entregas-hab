"use strict";
function PalindromeTwo(str) {
  let normal = str.replace(/ /g, "").toLowerCase();
  let inverso = [...normal]
    .reverse()
    .join("")
    .toLowerCase();
  console.log(normal);
  console.log(inverso);
  if (normal === inverso) {
    return true;
  }
  return false;
}

console.log(PalindromeTwo("Arriba la birra"));

/*

Primero pruebo que pasa al comparar dos variables tipo string, compruebo que solo sean true si coinciden caracter por caracter,
incluso si con las mayusculas y minusculas ya que deben ser iguales, por eso paso todo a minusculas para evitar problemas.

const a = 'Arribalabirra';
const b = 'arribalabirrA';

a === b ? console.log('true') : console.log('false');


Elimino los espacios de mi string con .replace() y lo paso todo a minusculas(solo valido para strings).

 Hago una copia del string normal y lo invierto con .reverse(), que me lo invierte y me lo convierte  en un array 
 de una posicion con la frase unida, es decir, tengo una palabra en la posicion 0 del array.
 
 Una vez invertida con la funcion .join() uno todos los valores del array y los convierte en string.Lo pasamos a minusculas
 y comprobamos si los dos strings coinciden.

 */
