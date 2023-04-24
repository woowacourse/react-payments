import { InputBoxProps } from '../../../types/InputBox';
import * as styled from './ExpirationDate.styled';

const ExpirationDate = ({ children, error }: InputBoxProps) => {
  return (
    <styled.ExpirationDate>
      <label>
        <styled.LabelHeader>만료일</styled.LabelHeader>
        <styled.ExpirationDateInputs>{children}</styled.ExpirationDateInputs>
      </label>
      {(error.expirationMonth || error.expirationYear) && (
        <styled.ErrorMessage>{error.expirationMonth || error.expirationYear}</styled.ErrorMessage>
      )}
    </styled.ExpirationDate>
  );
};

export default ExpirationDate;
