import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const CARD = {
  LG: {
    width: '293px',
    height: '183px',
  },
  MD: {
    width: '208px',
    height: '130px',
  },
};

const Styled = {
  Card: styled.div(({ size, styles }) => ({
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: COLOR.GRAY_80,
    boxShadow: `3px 3px 5px ${COLOR.BLACK_OPACITY_25}`,
    color: COLOR.GRAY_500,
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...CARD[size],
    ...styles,
  })),
};

export default Styled;
