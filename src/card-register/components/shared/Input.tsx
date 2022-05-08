import styled from '@emotion/styled';

const Input = styled.input`
  background-color: inherit;
  height: 47px;
  width: 100%;
  max-width: 318px;
  outline: none !important;
  border: inherit;
  font-size: 21px;
  text-align: center;
  &:focus {
    box-shadow: none;
  }
`;

export default Input;
