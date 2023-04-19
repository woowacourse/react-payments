import styled from 'styled-components';
import Label from './Label';

interface InputBoxProps {
  width?: string;
  labelValue: string | React.ReactElement;
  children: React.ReactElement;
}

const InputBox = ({ width, labelValue, children }: InputBoxProps) => {
  return (
    <InputBoxContainer width={width}>
      <Label>{labelValue}</Label>
      <InputContainer>{children}</InputContainer>
    </InputBoxContainer>
  );
};

const InputBoxContainer = styled.div<{ width?: string }>`
  width: ${(props) => props.width || '100%'};
`;

const InputContainer = styled.div`
  display: flex;
  height: 45px;

  padding: 12px;
  margin-top: 9px;

  box-sizing: border-box;
  background: #ecebf1;
  border-radius: 7px;
`;

export default InputBox;
