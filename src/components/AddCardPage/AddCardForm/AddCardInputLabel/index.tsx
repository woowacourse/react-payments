import Container from '../../../shared/Container';
import { AddCardInputLabelContainer, LabelText } from './styles';

interface Props {
  children: React.ReactNode;
  label: string | string[];
  width?: string;
}

const AddCardInputLabel = ({ children, label, width }: Props) => {
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
