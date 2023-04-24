import styled from 'styled-components';

export const Input = styled.input`
  display: flex;
  align-items: center;

  width: ${(props) => `${props.width}px`};
  height: 45px;

  padding: 0;
  border: 0;
  border-radius: 7px;
  background-color: #ecebf1;

  font-size: 15px;
  text-align: center;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #c6c6c6;
  }
`;
