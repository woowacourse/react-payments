import styled from 'styled-components';

type InputProps = {
  width: string;
  textAlign: string;
  background?: string;
  underline: boolean;
};

export const Input = styled.input<InputProps>`
  background-color: ${(props) => props.background || '#ecebf1'};
  border: none;
  border-bottom: ${(props) => (props.underline ? '1px solid #666565' : 'none')};
  border-radius: ${(props) => !props.underline && '4px'};
  height: 48px;
  width: ${(props) => props.width};
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
