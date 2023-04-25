import styled from 'styled-components';

export const Input = styled.input`
  width: ${(props) => props.width}px;
  height: 45px;

  display: flex;
  align-items: center;

  border: 0;
  border-radius: 7px;
  background-color: #ecebf1;
  font-size: 15px;
  padding: 0;
  text-align: center;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #c6c6c6;
  }

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
