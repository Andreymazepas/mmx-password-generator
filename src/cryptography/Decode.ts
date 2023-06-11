import { IPassword } from '../common/types';
import { allDigitSets } from './sets';

export const validate = (input: IPassword) => {
  let validSets = [1, 1, 1, 1, 1, 1, 1, 1];

  for (let i = 0; i < input.length; i++) {
    const digit = input[i];
    for (let j = 0; j < 8; j++) {
      if (validSets[j] && !allDigitSets[j][i].includes(digit)) {
        console.log(`Digit ${digit} is not valid for set ${j + 1}`);
        console.log(`Removing set ${j + 1}`);
        console.log(allDigitSets[j][i]);
        validSets[j] = 0;
      }
    }
  }
  // return true if validSets contain a single true value
  return validSets.reduce((acc, cur) => acc + cur, 0) === 1;
};

export const decode = (input: IPassword) => {
  // tODO
};
