import { InputBoxProps } from '../../../types/InputBox';
import * as styled from './SecurityNumbers.styled';

const SecurityNumbers = ({ children, error }: InputBoxProps) => {
  return (
    <styled.SecurityNumbers>
      <label>
        <styled.LabelHeader>보안 코드(CVC/CVV)</styled.LabelHeader>
        {children}
      </label>
      {error.securityNumbers && <styled.ErrorMessage>{error.securityNumbers}</styled.ErrorMessage>}
    </styled.SecurityNumbers>
  );
};

export default SecurityNumbers;
