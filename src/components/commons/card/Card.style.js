import styled from 'styled-components';

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
    backgroundColor: '#E5E5E5',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.25)',
    color: '#525252',
    fontSize: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...CARD[size],
    ...styles,
  })),
};

export default Styled;
