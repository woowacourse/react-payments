import type {ReactNode} from 'react';
import styled from 'styled-components';

type InfoInputSectionProps = {
  slots: ReactNode[];
};

const InfoInputSection = ({slots}: InfoInputSectionProps) => {
  return (
    <Container>
      {slots.map((slot, index) => (
        <Field key={index}>{slot}</Field>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

const Field = styled.div`
  display: contents;
`;

export default InfoInputSection;
