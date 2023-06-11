import { IState } from '../common/types';

export const encode = (input: IState) => {
  const password = [];
  for (let i = 0; i < 12; i++) {
    password.push(Math.floor(Math.random() * 8) + 1);
  }
  return password;
};
