import styled from '@emotion/styled';
import { Button } from './Styled';
import { useNumbersContext } from '../../contexts/NumbersContext';
import validateForm from '../../utils/validateForm';
import { useBrandContext } from '../../contexts/BrandContext';
import { useExpiryDateContext } from '../../contexts/ExpiryDateContext';
import { useCvcContext } from '../../contexts/CvcContext';
import { usePasswordContext } from '../../contexts/PasswordContext';

const SubmitButton = () => {
  const { numberFields } = useNumbersContext();
  const { brand } = useBrandContext();
  const { expiryFields } = useExpiryDateContext();
  const { cvcField } = useCvcContext();
  const { passwordField } = usePasswordContext();

  const isFormValid = validateForm({
    numberFields,
    expiryFields,
    cvcField,
    passwordField,
    brand,
  });

  return (
    <>{isFormValid && <ConfirmButton type="submit">확인</ConfirmButton>}</>
  );
};

export default SubmitButton;

const ConfirmButton = styled(Button)`
  position: sticky;
  bottom: 0;
  height: 52px;
`;
