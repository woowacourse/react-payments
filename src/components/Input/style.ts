import styled from 'styled-components';

type InputProps = {
  width: string;
  textAlign: string;
};

export const Input = styled.input<InputProps>`
  background-color: #ecebf1;
  border-radius: 7px;
  height: 48px;
  width: ${(props) => props.width};
  border: none;
  font-size: 18px;
  text-align: ${(props) => props.textAlign};
  padding: 0px 12px;
  :focus {
    outline: none;
  }
  margin-right: 10px;
  ::placeholder {
    font-size: 16px;
  }
`;

export default {};
