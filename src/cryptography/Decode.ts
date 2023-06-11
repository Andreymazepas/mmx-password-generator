import { allDigitSets } from './sets';

export const decode = (input: number[]) => {
  let validSets = [true, true, true, true, true, true, true, true];

  for (let i = 0; i < input.length; i++) {
    const digit = input[i];
    for (let j = 0; j < 8; j++) {
      if (validSets[j] && !allDigitSets[j][i].includes(digit)) {
        console.log(`Digit ${digit} is not valid for set ${j + 1}`);
        console.log(`Removing set ${j + 1}`);
        console.log(allDigitSets[j][i]);
        validSets[j] = false;
      }
    }
  }

  console.log(validSets);
};
