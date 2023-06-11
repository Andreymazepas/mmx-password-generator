import { initialState } from '../common/common';
import { IPassword } from '../common/types';
import { encode } from './Encode';
import { allDigitSets, allPasswordSets } from './sets';

export const findSet = (input: IPassword) => {
  let validSets = [1, 1, 1, 1, 1, 1, 1, 1];

  for (let i = 0; i < input.length; i++) {
    const digit = input[i];
    for (let j = 0; j < 8; j++) {
      if (validSets[j] && !allDigitSets[j][i].includes(digit)) {
        validSets[j] = 0;
      }
    }
  }
  const singleValidSet = validSets.reduce((acc, cur) => acc + cur, 0) === 1;
  if (singleValidSet) {
    return validSets.indexOf(1);
  }
  return -1;
};

export const decode = (input: IPassword) => {
  const setNumber = findSet(input);
  if (setNumber === -1) {
    return 'Invalid password';
  }
  const set = allPasswordSets[setNumber];
  const state = {
    ...initialState.weapons,
    ...initialState.hearts,
    ...initialState.subs,
    ...initialState.parts,
  };

  // easy ones first
  state.chill = input[11] == set[11][1][0] || input[11] == set[11][3][0];
  state.heart_spark = input[11] == set[11][2][0] || input[11] == set[11][3][0];
  state.sting = input[9] == set[9][1][0] || input[9] == set[9][3][0];
  state.sub_eagle = input[9] == set[9][2][0] || input[9] == set[9][3][0];
  state.spark = input[7] == set[7][1][0] || input[7] == set[7][3][0];
  state.heart_sting = input[7] == set[7][2][0] || input[7] == set[7][3][0];
  state.eagle = input[3] == set[3][1][0] || input[3] == set[3][3][0];
  state.heart_eagle = input[3] == set[3][2][0] || input[3] == set[3][3][0];
  state.heart_flame = input[2] == set[2][1][0] || input[2] == set[2][3][0];
  state.sub_flame = input[2] == set[2][2][0] || input[2] == set[2][3][0];

  state.heart_chill =
    input[0] == set[0][1][0] ||
    input[0] == set[0][1][1] ||
    input[0] == set[0][3][0] ||
    input[0] == set[0][3][1];
  state.sub_armadillo =
    input[0] == set[0][2][0] ||
    input[0] == set[0][2][1] ||
    input[0] == set[0][3][0] ||
    input[0] == set[0][3][1];

  state.flame =
    input[1] == set[1][1][0] ||
    input[1] == set[1][1][1] ||
    input[1] == set[1][3][0] ||
    input[1] == set[1][3][1];
  state.head =
    input[1] == set[1][2][0] ||
    input[1] == set[1][2][1] ||
    input[1] == set[1][3][0] ||
    input[1] == set[1][3][1];

  state.octopus =
    input[4] == set[4][1][0] ||
    input[4] == set[4][1][1] ||
    input[4] == set[4][3][0] ||
    input[4] == set[4][3][1];
  state.body =
    input[4] == set[4][2][0] ||
    input[4] == set[4][2][1] ||
    input[4] == set[4][3][0] ||
    input[4] == set[4][3][1];

  state.boomer =
    input[5] == set[5][1][0] ||
    input[5] == set[5][1][1] ||
    input[5] == set[5][3][0] ||
    input[5] == set[5][3][1];
  state.heart_boomer =
    input[5] == set[5][2][0] ||
    input[5] == set[5][2][1] ||
    input[5] == set[5][3][0] ||
    input[5] == set[5][3][1];

  state.armadillo =
    input[6] == set[6][1][0] ||
    input[6] == set[6][1][1] ||
    input[6] == set[6][3][0] ||
    input[6] == set[6][3][1];
  state.arm =
    input[6] == set[6][2][0] ||
    input[6] == set[6][2][1] ||
    input[6] == set[6][3][0] ||
    input[6] == set[6][3][1];

  state.heart_armadillo =
    input[8] == set[8][1][0] ||
    input[8] == set[8][1][1] ||
    input[8] == set[8][3][0] ||
    input[8] == set[8][3][1];
  state.foot =
    input[8] == set[8][2][0] ||
    input[8] == set[8][2][1] ||
    input[8] == set[8][3][0] ||
    input[8] == set[8][3][1];

  state.heart_octopus =
    input[10] == set[10][1][0] ||
    input[10] == set[10][1][1] ||
    input[10] == set[10][3][0] ||
    input[10] == set[10][3][1];
  state.sub_spark =
    input[10] == set[10][2][0] ||
    input[10] == set[10][2][1] ||
    input[10] == set[10][3][0] ||
    input[10] == set[10][3][1];

  const formattedState = {
    weapons: {
      armadillo: state.armadillo,
      boomer: state.boomer,
      chill: state.chill,
      flame: state.flame,
      octopus: state.octopus,
      spark: state.spark,
      sting: state.sting,
      eagle: state.eagle,
    },
    hearts: {
      heart_armadillo: state.heart_armadillo,
      heart_boomer: state.heart_boomer,
      heart_chill: state.heart_chill,
      heart_flame: state.heart_flame,
      heart_octopus: state.heart_octopus,
      heart_spark: state.heart_spark,
      heart_sting: state.heart_sting,
      heart_eagle: state.heart_eagle,
    },
    subs: {
      sub_armadillo: state.sub_armadillo,
      sub_flame: state.sub_flame,
      sub_eagle: state.sub_eagle,
      sub_spark: state.sub_spark,
    },
    parts: {
      foot: state.foot,
      head: state.head,
      arm: state.arm,
      body: state.body,
    },
  };
  console.log(formattedState);

  const valid = encode(formattedState, setNumber).every(
    (digit, index) => digit === input[index]
  );
  console.log(encode(formattedState, setNumber));

  return valid ? formattedState : 'Invalid password';
};
