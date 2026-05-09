import type {ReactNode} from 'react';
import Description from '../Description/Description';
import Label from '../Label/Label';
import Title from '../Title/Title';
import styled from 'styled-components';

const InputContainer = ({
  title,
  description,
  label,
  children,
}: {
  title: string;
  description?: string;
  label?: string;
  children: ReactNode;
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <Description value={description} />}
      <InputGroup>
        {label && <Label value={label} />}
        {children}
      </InputGroup>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  gap: 2px;
`;

export default InputContainer;
