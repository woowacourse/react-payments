import styled from 'styled-components';

export interface StyledProps {
  width?: string;
  textAlign?: string;
}
export const InputStyle = styled.input<StyledProps>`
  width: ${(props) => props.width ?? '100%'};
  height: 45px;
  letter-spacing: 1.5px;
  background-color: #ecebf1;
  border-radius: 7px;
  border: none;
  font-size: 18px;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: ${(props) => props.textAlign ?? 'center'};

  &:focus {
    outline: none;
  }
`;
