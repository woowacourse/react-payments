import { useContext } from 'react';
import styled from 'styled-components';
import CardNumberInput from '../../Modules/CardNumberInput';
import ExpiredDateInput from '../../Modules/ExpiredDateInput';
import CardOwnerInput from '../../Modules/CardOwnerInput';
import SecurityNumberInput from '../../Modules/SecurityNumberInput';
import PasswordInput from '../../Modules/PasswordInput';
import SubmitButton from '../../Atoms/SubmitButton';
import { CardNumberContext } from '../../../context/CardNumberContext';
import { ExpiredDateContext } from '../../../context/ExpiredDateContext';
import { CardOwnerContext } from '../../../context/CardOwnerContext';
import { SecurityNumberContext } from '../../../context/SecurityNumberContext';
import { PasswordContext } from '../../../context/PasswordContext';
import { MESSAGE } from '../../../constant/message';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function CardAddForm() {
  const { isValid: isCardNumberValid } = useContext(CardNumberContext);
  const { isValid: isExpiredDateValid } = useContext(ExpiredDateContext);
  const { isValid: isOwnerNameValid } = useContext(CardOwnerContext);
  const { isValid: isSecurityNumberValid } = useContext(SecurityNumberContext);
  const { isValid: isPasswordValid } = useContext(PasswordContext);

  const isValidForm = [
    isCardNumberValid,
    isExpiredDateValid,
    isOwnerNameValid,
    isSecurityNumberValid,
    isPasswordValid,
  ].every(valid => valid);

  const onAddFormSubmit = event => {
    event.preventDefault();

    isValidForm ? alert(MESSAGE.SAVE_INFO) : alert(MESSAGE.DENY_SAVE);
  };

  return (
    <FormContainer onSubmit={onAddFormSubmit}>
      <CardNumberInput />
      <ExpiredDateInput />
      <CardOwnerInput />
      <SecurityNumberInput />
      <PasswordInput />
      <ButtonContainer>
        <SubmitButton width="51px" height="34px" hidden={!isValidForm}>
          다음
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
}

export default CardAddForm;
