import { IHearts, IParts, IState, ISubs, IWeapons } from './types';

const subs: ISubs[] = ['sub_armadillo', 'sub_flame', 'sub_eagle', 'sub_spark'];

const parts: IParts[] = ['foot', 'head', 'arm', 'body'];

const weapons: IWeapons[] = [
  'armadillo',
  'boomer',
  'chill',
  'flame',
  'octopus',
  'spark',
  'sting',
  'eagle',
];

const hearts: IHearts[] = [
  'heart_armadillo',
  'heart_boomer',
  'heart_chill',
  'heart_flame',
  'heart_octopus',
  'heart_spark',
  'heart_sting',
  'heart_eagle',
];

const initialState: IState = {
  weapons: {
    armadillo: false,
    boomer: false,
    chill: false,
    flame: false,
    octopus: false,
    spark: false,
    sting: false,
    eagle: false,
  },
  hearts: {
    heart_armadillo: false,
    heart_boomer: false,
    heart_chill: false,
    heart_flame: false,
    heart_octopus: false,
    heart_spark: false,
    heart_sting: false,
    heart_eagle: false,
  },
  subs: {
    sub_armadillo: false,
    sub_flame: false,
    sub_eagle: false,
    sub_spark: false,
  },
  parts: {
    foot: false,
    head: false,
    arm: false,
    body: false,
  },
};

export { subs, parts, weapons, hearts, initialState };
