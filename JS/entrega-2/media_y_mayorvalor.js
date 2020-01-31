"use strict";
let teamMaria = [62, 34, 55];
let teamPaula = [35, 60, 59];
let teamRebeca = [40, 39, 63];

function halfCalc(array) {
  let ammount = 0;
  for (let i = 0; i < array.length; i++) {
    ammount = ammount + array[i];
  }

  return ammount / array.length;
}

function maxValueCalc() {
  let max;
  max = Math.max(
    halfCalc(teamMaria),
    halfCalc(teamPaula),
    halfCalc(teamRebeca)
  );
  if (max === halfCalc(teamMaria)) {
    return console.log(`El equipo de Maria tiene mayor puntuación = ${max}`);
  } else if (max === halfCalc(teamPaula)) {
    return console.log(`El equipo de Paula tiene mayor puntuación =  ${max}`);
  } else {
    return console.log(`El equipo de Rebeca tiene mayor puntuación =  ${max}`);
  }
}

maxValueCalc();
