export type IWeapons =
  | 'armadillo'
  | 'boomer'
  | 'chill'
  | 'flame'
  | 'octopus'
  | 'spark'
  | 'sting'
  | 'eagle';
export type IHearts =
  | 'heart_armadillo'
  | 'heart_boomer'
  | 'heart_chill'
  | 'heart_flame'
  | 'heart_octopus'
  | 'heart_spark'
  | 'heart_sting'
  | 'heart_eagle';
export type ISubs = 'sub_armadillo' | 'sub_flame' | 'sub_eagle' | 'sub_spark';
export type IParts = 'foot' | 'head' | 'arm' | 'body';

export type WeaponMap = Record<IWeapons, boolean>;
export type HeartMap = Record<IHearts, boolean>;
export type SubMap = Record<ISubs, boolean>;
export type PartMap = Record<IParts, boolean>;

export interface IState {
  weapons: WeaponMap;
  hearts: HeartMap;
  subs: SubMap;
  parts: PartMap;
}

export type IPassword = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type IPasswordSet = Array<Array<Array<number>>>;

export interface IPasswordFactors {
  x: ISubs | IHearts | IWeapons | IParts;
  y: ISubs | IHearts | IWeapons | IParts;
  main: Array<ISubs | IHearts | IWeapons | IParts>;
}
