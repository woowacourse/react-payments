import styled from 'styled-components';

const CARD = {
  LARGE: {
    width: '293px',
    height: '183px',
  },
  MEDIUM: {
    width: '208px',
    height: '130px',
  },
};

const CARD_TYPE = {
  LARGE: {
    fontSize: '12px',
    left: '20px',
    top: '19px',
  },
  MEDIUM: {
    fontSize: '10px',
    left: '14px',
    top: '14px',
  },
};

const CHIP = {
  LARGE: {
    width: '55px',
    height: '36px',
    left: '20px',
    top: '65px',
  },
  MEDIUM: {
    width: '39px',
    height: '25px',
    left: '14px',
    top: '45px',
  },
};

const CARD_NUMBER = {
  LARGE: {
    bottom: '45px',
    fontSize: '18px',
    letterSpacing: '3px',
  },
  MEDIUM: {
    bottom: '33px',
    fontSize: '13px',
    letterSpacing: '2px',
  },
};

const CARD_OWNER = {
  LARGE: {
    left: '26px',
    bottom: '17px',
  },
  MEDIUM: {
    left: '18px',
    bottom: '10px',
    fontSize: '12px',
  },
};

const CARD_EXPIRED_DATE = {
  LARGE: {
    right: '26px',
    bottom: '17px',
  },
  MEDIUM: {
    right: '18px',
    bottom: '10px',
    fontSize: '12px',
  },
};

const Styled = {
  Card: styled.div(({ size, color }) => ({
    position: 'relative',
    borderRadius: '5px',
    backgroundColor: color || '#E5E5E5',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
    color: '#525252',
    ...CARD[size],
  })),
  CardType: styled.div(({ size }) => ({
    position: 'absolute',
    color: '#383838',
    ...CARD_TYPE[size],
  })),
  Chip: styled.div(({ size }) => ({
    position: 'absolute',
    backgroundColor: '#cbba64',
    borderRadius: '4px',
    ...CHIP[size],
  })),
  CardNumber: styled.div(({ size }) => ({
    position: 'absolute',
    inlineSize: 'fit-content',
    left: '50%',
    transform: 'translateX(-50%)',
    fontWeight: 700,
    ...CARD_NUMBER[size],
  })),
  CardOwner: styled.div(({ size }) => ({
    position: 'absolute',
    fontWeight: 700,
    ...CARD_OWNER[size],
  })),
  CardExpiredDate: styled.div(({ size }) => ({
    position: 'absolute',
    fontWeight: 700,
    ...CARD_EXPIRED_DATE[size],
  })),
};

export default Styled;
