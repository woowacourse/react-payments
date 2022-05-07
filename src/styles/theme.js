const LAYOUT = {
  BORDER_RADIUS: 5,
};

const COLORS = {
  gamboge: '#F28B0D',

  fairPink: '#FFEAEA',
  cornflowerLilac: '#FFACAC',
  bittersweet: '#f67070',
  sunsetOrange: '#F55454',

  dodgerSky: '#47A9FF',
  dodgerBlue: '#1C71FF',
  cloudBurst: '#223350',

  chelseaCucumber: '#72AE58',

  laser: '#CBBA64',

  black: '#000',
  'black-05': 'rgba(0, 0, 0, 0.05)',
  'black-15': 'rgba(0, 0, 0, 0.15)',
  'black-25': 'rgba(0, 0, 0, 0.25)',
  'black-55': 'rgba(0, 0, 0, 0.55)',
  dorado: '#525252',
  silverChalice: '#999',
  silver: '#BBB',
  alto: '#DDD',
  athensGray: '#ECEBF1',
  concrete: '#F3F3F3',
  white: '#fff',
  'white-80': 'rgba(255,255,255,.8)',
  'white-50': 'rgba(255,255,255,.5)',
};

const GRADATION = {
  'cornflowerBlue-affair-135deg': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'creamCan-vividTangerine-120deg': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
  'pictonBlue-danube-left': 'linear-gradient(to left, #48c6ef 0%, #6f86d6 100%)',
  'mystic-bottom': 'linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%)',
  'gossamer-keppel-top': 'linear-gradient(to top, #0ba360 0%, #3cba92 100%)',
  'persimmon-carrotOrange-60deg': 'linear-gradient(-60deg, #ff5858 0%, #f09819 100%)',
  'dodgerBlue-aquamarineBlue-top':
    'linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)',
};

const BRAND_COLORS = {
  accent: COLORS.dodgerBlue,
  accentFont: COLORS.white,
  primary: COLORS.dodgerBlue,
  warning: COLORS.gamboge,
  danger: COLORS.sunsetOrange,
  success: COLORS.chelseaCucumber,
  info: COLORS.dodgerSky,
};

export { LAYOUT, COLORS, GRADATION, BRAND_COLORS };
