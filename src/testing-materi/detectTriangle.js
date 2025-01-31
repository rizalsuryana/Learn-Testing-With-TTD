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

  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){
    throw new Error('Input must be a number');
  }

};

export default detectTriangle;