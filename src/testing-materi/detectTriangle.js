const detectTriangle = (a, b, c) => {
//   if (typeof a !== 'number') {
//     throw new Error('Input must be a number');
//   }

  //   if (typeof b !== 'number'){
  //     throw new Error('Input must be a number');
  //   }

  //   if (typeof c !== 'number'){
  //     throw new Error('Input must be a number');
  //   }

  //   after passed the test let's change the code

  // if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
  //   throw new Error('Input must be a number');
  // }

  // if (a <= 0 || b <= 0 || c <= 0) {
  //   throw new Error('Input must be a positive number');
  // }

  // if (a + b <= c || a + c <= b || b + c <= a) {
  //   throw new Error('Input is triangle inequality violation');
  // }

  // Refactor!
  [a, b, c] = [a, b, c].sort((x, y) => x - y);

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    throw new Error('Input must be a number');
  }

  if (a <= 0) {
    throw new Error('Input must be a positive number');
  }

  if (a + b <= c){
    throw new Error('Input is triangle inequality violation');
  }

  if (a === b && b === c){
    return 'Segitiga Sama Sisi';
  }

  if (a===b || b===c){
    return 'Segitiga Sama Kaki';
  }

  return 'Segitiga Sembarang';

};

export default detectTriangle;