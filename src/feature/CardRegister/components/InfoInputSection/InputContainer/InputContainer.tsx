import type {ReactNode} from 'react';
import Description from '../../../../../common/components/Description/Description';
import Label from '../../../../../common/components/Label/Label';
import Title from '../../../../../common/components/Title/Title';
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
      {label && <Label value={label} />}
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
`;

export default InputContainer;
