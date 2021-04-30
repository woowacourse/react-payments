import { FC } from 'react';
import Container from '../../../shared/Container';
import { AddCardInputLabelContainer } from './styles';

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
            <span key={index} className="label-text">
              {labelText}
            </span>
          ))}
        </Container>
      ) : (
        <span className="label-text">{label}</span>
      )}
      <Container flex>{children}</Container>
    </AddCardInputLabelContainer>
  );
};

export default AddCardInputLabel;
