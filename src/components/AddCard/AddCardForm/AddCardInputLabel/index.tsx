import { FC } from 'react';
import Container from '../../../common/Container';
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
          {label.map((el, idx) => (
            <span key={idx} className="label-text">
              {el}
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
