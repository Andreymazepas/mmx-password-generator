import { IPasswordFactors, IPasswordSet } from '../common/types';

const factors: IPasswordFactors[] = [
  {
    x: 'heart_chill',
    y: 'sub_armadillo',
    main: [
      'chill',
      'flame',
      'heart_octopus',
      'heart_sting',
      'sub_spark',
      'sub_eagle',
      'head',
      'body',
      'arm',
    ],
  },
  {
    x: 'flame',
    y: 'head',
    main: [
      'heart_armadillo',
      'heart_boomer',
      'heart_chill',
      'heart_flame',
      'heart_octopus',
      'heart_spark',
      'heart_sting',
      'heart_eagle',
    ],
  },
  {
    x: 'heart_flame',
    y: 'sub_flame',
    main: [],
  },
  {
    x: 'eagle',
    y: 'heart_eagle',
    main: [],
  },
  {
    x: 'octopus',
    y: 'body',
    main: [
      'armadillo',
      'boomer',
      'chill',
      'flame',
      'eagle',
      'heart_armadillo',
      'heart_boomer',
      'sub_armadillo',
      'arm',
    ],
  },
  {
    x: 'boomer',
    y: 'heart_boomer',
    main: [
      'sub_armadillo',
      'sub_flame',
      'sub_spark',
      'sub_eagle',
      'foot',
      'head',
      'body',
      'arm',
    ],
  },
  {
    x: 'armadillo',
    y: 'arm',
    main: [
      'octopus',
      'eagle',
      'heart_chill',
      'heart_flame',
      'sub_eagle',
      'head',
    ],
  },
  {
    x: 'spark',
    y: 'heart_sting',
    main: [],
  },
  {
    x: 'heart_armadillo',
    y: 'foot',
    main: [
      'armadillo',
      'boomer',
      'heart_boomer',
      'heart_chill',
      'heart_flame',
      'heart_octopus',
      'heart_sting',
      'sub_spark',
      'body',
    ],
  },
  {
    x: 'sting',
    y: 'sub_eagle',
    main: [],
  },
  {
    x: 'heart_octopus',
    y: 'sub_spark',
    main: [
      'armadillo',
      'boomer',
      'chill',
      'flame',
      'octopus',
      'spark',
      'sting',
      'eagle',
    ],
  },
  {
    x: 'chill',
    y: 'heart_spark',
    main: [],
  },
];

// [(N), (X), (Y), (XY)] format
const convertDigitSetToPasswordSet = (digitSet: number[][]) => {
  const passwordSet: IPasswordSet = [];
  for (let i = 0; i < 12; i++) {
    let password: Array<Array<number>> = [];
    if (digitSet[i].length === 4) {
      password = digitSet[i].map((digit) => [digit]);
    } else {
      password = [
        [digitSet[i][0], digitSet[i][1]],
        [digitSet[i][2], digitSet[i][3]],
        [digitSet[i][4], digitSet[i][5]],
        [digitSet[i][6], digitSet[i][7]],
      ];
    }

    passwordSet.push(password);
  }
  return passwordSet;
};

const digitSet1 = [
  [4, 1, 2, 7, 6, 5, 8, 3],
  [3, 2, 7, 8, 4, 1, 6, 5],
  [2, 4, 6, 7],
  [5, 3, 2, 6],
  [5, 7, 3, 2, 1, 8, 6, 4],
  [8, 2, 4, 7, 1, 3, 6, 5],
  [5, 4, 8, 1, 3, 7, 6, 2],
  [2, 6, 8, 7],
  [1, 8, 4, 6, 3, 7, 2, 5],
  [8, 3, 2, 1],
  [2, 6, 8, 7, 5, 3, 4, 1],
  [1, 4, 6, 8],
];

const digitSet2 = [
  [6, 5, 8, 3, 4, 1, 2, 7],
  [7, 8, 3, 2, 6, 5, 4, 1],
  [1, 5, 8, 3],
  [4, 7, 8, 1],
  [8, 1, 4, 6, 7, 5, 2, 3],
  [6, 5, 1, 3, 4, 7, 8, 2],
  [6, 2, 3, 7, 8, 1, 5, 4],
  [7, 8, 6, 2],

  [2, 5, 3, 7, 4, 6, 1, 8],
  [6, 7, 4, 5],
  [4, 1, 5, 3, 8, 7, 2, 6],
  [8, 6, 4, 1],
];

const digitSet3 = [
  [1, 4, 7, 2, 5, 6, 3, 8],
  [7, 8, 3, 2, 6, 5, 4, 1],
  [6, 7, 2, 4],
  [8, 1, 4, 7],
  [5, 7, 3, 2, 1, 8, 6, 4],
  [8, 2, 4, 7, 1, 3, 6, 5],
  [5, 4, 8, 1, 3, 7, 6, 2],
  [8, 7, 2, 6],

  [3, 7, 2, 5, 1, 8, 4, 6],
  [8, 3, 2, 1],
  [8, 7, 2, 6, 4, 1, 5, 3],
  [4, 1, 8, 6],
];

const digitSet4 = [
  [5, 6, 3, 8, 1, 4, 7, 2],
  [3, 2, 7, 8, 4, 1, 6, 5],
  [8, 3, 1, 5],
  [2, 6, 5, 3],

  [8, 1, 4, 6, 7, 5, 2, 3],
  [6, 5, 1, 3, 4, 7, 8, 2],
  [6, 2, 3, 7, 8, 1, 5, 4],
  [6, 2, 7, 8],

  [4, 6, 1, 8, 2, 5, 3, 7],
  [6, 7, 4, 5],
  [5, 3, 4, 1, 2, 6, 8, 7],
  [6, 8, 1, 4],
];

const digitSet5 = [
  [6, 5, 8, 3, 4, 1, 2, 7],
  [7, 8, 3, 2, 6, 5, 4, 1],
  [1, 5, 8, 3],
  [8, 1, 4, 7],
  [7, 5, 2, 3, 8, 1, 4, 6],
  [1, 3, 6, 5, 8, 2, 4, 7],
  [3, 7, 6, 2, 5, 4, 8, 1],
  [7, 8, 6, 2],

  [5, 2, 7, 3, 6, 4, 8, 1],
  [3, 8, 1, 2],
  [8, 7, 2, 6, 4, 1, 5, 3],
  [4, 1, 8, 6],
];

const digitSet6 = [
  [5, 6, 3, 8, 1, 4, 7, 2],
  [3, 2, 7, 8, 4, 1, 6, 5],
  [8, 3, 1, 5],
  [5, 3, 2, 6],
  [7, 5, 2, 3, 8, 1, 4, 6],
  [1, 3, 6, 5, 8, 2, 4, 7],
  [3, 7, 6, 2, 5, 4, 8, 1],
  [6, 2, 7, 8],

  [6, 4, 8, 1, 5, 2, 7, 3],
  [3, 8, 1, 2],
  [2, 6, 8, 7, 5, 3, 4, 1],
  [1, 4, 6, 8],
];

const digitSet7 = [
  [1, 4, 7, 2, 5, 6, 3, 8],
  [7, 8, 3, 2, 6, 5, 4, 1],
  [6, 7, 2, 4],
  [4, 7, 8, 1],
  [1, 8, 6, 4, 5, 7, 3, 2],
  [4, 7, 8, 2, 6, 5, 1, 3],
  [8, 1, 5, 4, 6, 2, 3, 7],
  [8, 7, 2, 6],

  [7, 3, 5, 2, 8, 1, 6, 4],
  [7, 6, 5, 4],
  [4, 1, 5, 3, 8, 7, 2, 6],
  [8, 6, 4, 1],
];

const digitSet8 = [
  [4, 1, 7, 2, 6, 5, 8, 3],
  [3, 2, 7, 8, 4, 1, 6, 5],
  [2, 4, 6, 7],
  [2, 6, 5, 3],

  [1, 8, 6, 4, 5, 7, 3, 2],
  [4, 7, 8, 2, 6, 5, 1, 3],
  [8, 1, 5, 4, 6, 2, 3, 7],
  [2, 6, 8, 7],

  [8, 1, 6, 4, 7, 3, 5, 2],
  [7, 6, 5, 4],
  [5, 3, 4, 1, 2, 6, 8, 7],
  [6, 8, 1, 4],
];

const allDigitSets = [
  digitSet1,
  digitSet2,
  digitSet3,
  digitSet4,
  digitSet5,
  digitSet6,
  digitSet7,
  digitSet8,
];

const allPasswordSets = allDigitSets.map((digitSet) =>
  convertDigitSetToPasswordSet(digitSet)
);

export { allPasswordSets, allDigitSets, factors };
