import styled from 'styled-components';
import { COLOR } from '../../../constants/color';

const CARD_TYPE = {
  LG: {
    fontSize: '14px',
    left: '20px',
    top: '19px',
  },
  MD: {
    fontSize: '10px',
    left: '14px',
    top: '14px',
  },
};

const CHIP = {
  LG: {
    width: '55px',
    height: '36px',
    left: '20px',
    top: '65px',
  },
  MD: {
    width: '39px',
    height: '25px',
    left: '14px',
    top: '45px',
  },
};

const CARD_NUMBER = {
  LG: {
    bottom: '45px',
    fontSize: '20px',
    letterSpacing: '3px',
  },
  MD: {
    bottom: '33px',
    fontSize: '15px',
    letterSpacing: '2px',
  },
};

const CARD_OWNER = {
  LG: {
    left: '26px',
    bottom: '17px',
    fontSize: '16px',
  },
  MD: {
    left: '18px',
    bottom: '10px',
    fontSize: '12px',
  },
};

const CARD_EXPIRED_DATE = {
  LG: {
    right: '26px',
    bottom: '17px',
    fontSize: '16px',
  },
  MD: {
    right: '18px',
    bottom: '10px',
    fontSize: '12px',
  },
};

const Styled = {
  CardType: styled.div(({ size }) => ({
    position: 'absolute',
    color: COLOR.GRAY_700,
    ...CARD_TYPE[size],
  })),
  Chip: styled.div(({ size }) => ({
    position: 'absolute',
    backgroundColor: COLOR.GOLD_400,
    borderRadius: '4px',
    ...CHIP[size],
  })),
  CardNumber: styled.div(({ size }) => ({
    display: 'grid',
    width: '80%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: '6px',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    fontWeight: 700,
    ...CARD_NUMBER[size],
  })),
  CardOwner: styled.div(({ size }) => ({
    position: 'absolute',
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '50%',
    ...CARD_OWNER[size],
  })),
  CardExpiredDate: styled.div(({ size }) => ({
    position: 'absolute',
    fontWeight: 700,
    ...CARD_EXPIRED_DATE[size],
  })),
};

export default Styled;
