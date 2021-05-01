import { FC } from 'react';
import Container from '../../../shared/Container';
import { AddCardInputLabelContainer, LabelText } from './styles';

interface Props {
  label: string | string[];
  width?: string;
}

const AddCardInputLabel: FC<Props> = ({ label, width, children }) => {
  return (
    <AddCardInputLabelContainer width={width}>
      {Array.isArray(label) ? (
        <Container flex justifyContent="space-between">
          {label.map((labelText, index) => (
            <LabelText key={index}>{labelText}</LabelText>
          ))}
        </Container>
      ) : (
        <LabelText>{label}</LabelText>
      )}
      <Container flex>{children}</Container>
    </AddCardInputLabelContainer>
  );
};

export default AddCardInputLabel;
