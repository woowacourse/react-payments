import styled from 'styled-components';

export const Input = styled.input`
  width: ${(props) => props.about}px;
  height: 14px;

  display: flex;
  align-items: center;

  border: 0;
  background-color: #ecebf1;
  font-size: 16px;
  padding: 0;
  text-align: center;

  :focus {
    outline: none;
  }
`;
