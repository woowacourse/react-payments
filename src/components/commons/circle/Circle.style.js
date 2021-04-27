import styled from 'styled-components';

export const CIRCLE_SIZE = {
  LG: {
    width: '37px',
    height: '37px',
  },
  SM: {
    width: '7px',
    height: '7px',
  },
  XS: {
    width: '5.5px',
    height: '5.5px',
  },
};

const Styled = {
  Circle: styled.div(({ size, styles }) => ({
    borderRadius: '50%',
    backgroundColor: '#000',
    width: '5px',
    height: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...CIRCLE_SIZE[size],
    ...styles,
  })),
};

export default Styled;
