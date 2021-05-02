import styled from 'styled-components';

const Styled = {
  TransparentInput: styled.input(({ styles }) => ({
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    fontWeight: '600',
    width: '100%',
    padding: '0',
    paddingTop: '2px',
    height: '45px',
    ...styles,
  })),
};

export default Styled;
