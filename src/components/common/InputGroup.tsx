import styled from 'styled-components';
import Label from './Label';

interface InputGroupProps {
  children: React.ReactNode;
  labelValue: string | React.ReactElement;
}

const InputGroup = ({ children, labelValue }: InputGroupProps) => {
  return (
    <InputGroupContainer>
      <Label>{labelValue}</Label>
      <div>{children}</div>
    </InputGroupContainer>
  );
};

const InputGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export default InputGroup;
