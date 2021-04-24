import styled from 'styled-components';

const Styled = {
  Button: styled.button(({ styles }) => ({
    color: '#000',
    fontWeight: '700',
    fontSize: '14px',
    cursor: 'pointer',
    ...styles,
  })),
};

export default Styled;
