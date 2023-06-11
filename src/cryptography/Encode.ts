import { IPasswordFactors, IPasswordSet, IState } from '../common/types';
import { allPasswordSets, factors } from './sets';

const getNumber = (
  index: number,
  x: boolean,
  y: boolean,
  mainSum: number,
  randomSet: IPasswordSet
) => {
  const mainSumEven = mainSum % 2 === 0;
  // which pair to use, N is 0, X is 1, Y is 2, XY is 3
  let pairToUse = 0;
  if (x && y) {
    pairToUse = 3;
  } else if (x) {
    pairToUse = 1;
  } else if (y) {
    pairToUse = 2;
  }
  const indexToUse = randomSet[index].length > 1 ? (mainSumEven ? 0 : 1) : 0;
  return randomSet[index][pairToUse][indexToUse];
};

export const encode = (input: IState, setNumber?: number) => {
  const randomSetNumber = Math.floor(Math.random() * 8) + 1;
  const randomSet =
    allPasswordSets[setNumber ? setNumber : randomSetNumber - 1];

  // flatten the object to a single level deep
  const flattenedInput = {
    ...input.weapons,
    ...input.hearts,
    ...input.subs,
    ...input.parts,
  };
  const password = [];
  for (let i = 0; i < 12; i++) {
    const factor = factors[i];
    const x = flattenedInput[factor.x];
    const y = flattenedInput[factor.y];
    const main = factor.main.map((factor) => flattenedInput[factor]);
    const mainSum = main.reduce((acc, cur) => (cur ? acc + 1 : acc + 0), 0);

    password.push(getNumber(i, x, y, mainSum, randomSet));
  }
  return password;
};
