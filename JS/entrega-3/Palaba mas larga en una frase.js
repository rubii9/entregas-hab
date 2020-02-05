"use strict";
function LetterCount(str) {
  let stringArray = str.split(" "); //podriamos añadir un .replace() para no tener en cuenta numeros,puntos,simbolos,etc
  let longestWord = "";
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > longestWord.length) {
      longestWord = stringArray[i];
    }
  }

  return longestWord;
}

console.log(
  "LongestWord is : ",
  LetterCount("Hoy es un dia estupendo y fantastico")
);
