import styled from 'styled-components';

const Styled = {
  Button: styled.button(({ styles }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    color: 'inherit',
    ...styles,
  })),
};

export default Styled;
