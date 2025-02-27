let numeroUn = 1;
let stringUn = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';

// Comparación usando === para verificar tipo y valor
if (numeroUn === stringUn) { 
  console.log('Las variables numeroUn y stringUn tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroUn y stringUn NO tienen el mismo tipo');
}

// Comparación correcta para validar tipo y valor
if (numeroTreinta === Number(stringTreinta)) { 
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo');
}

// Corrección en la conversión de datos
if (numeroDiez === Number(stringDiez)) { 
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor y el mismo tipo');
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo tipo');
}
