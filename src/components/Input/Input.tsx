import styled, { CSSProperties } from 'styled-components';

type InputProps = {
  textAlign: CSSProperties['textAlign'];
};

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: 45px;

  font-size: 18px;
  text-align: ${(props) => props.textAlign};
`;

type InputBoxProps = {
  marginTop?: CSSProperties['marginTop'];
};

export const InputBox = styled.div<InputBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #ecebf1;
  border-radius: 7px;
  margin-top: ${(props) => props.marginTop};
`;
