import { FC } from 'react';
import Container from '../../../common/Container';
import { AddCardInputContainerLabel } from './styles';

interface Props {
  label: string | string[];
  width?: string;
}

const AddCardInputContainer: FC<Props> = ({ label, width, children }) => {
  return (
    <AddCardInputContainerLabel width={width}>
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
    </AddCardInputContainerLabel>
  );
};

export default AddCardInputContainer;
