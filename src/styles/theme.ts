const colors = {
  gray1: '#ecebf1',
  gray2: '#525252',
  gray3: '#383838',
  gray4: '#575757',
} as const;

const registerFormInput = {
  padding: 0,

  borderRadius: '7px',
  border: 'none',
  outline: 'none',

  background: colors.gray1,
} as const;

export type RegisterFormInputType = typeof registerFormInput;
export type Colors = typeof colors;

const theme = {
  registerFormInput,
  colors,
};

export default theme;
