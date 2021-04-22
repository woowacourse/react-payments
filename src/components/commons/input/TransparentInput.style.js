import styled from 'styled-components';

const Styled = {
  TransparentInput: styled.input(({ styles }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '45px',
    ...styles,
  })),
};

export default Styled;
