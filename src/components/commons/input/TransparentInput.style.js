import styled from 'styled-components';

const Styled = {
  TransparentInput: styled.input(({ ...props }) => ({
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    ...props,
  })),
};

export default Styled;
