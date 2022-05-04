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
  const cardNumberProps = useContext(CardNumberContext);
  const expiredDateProps = useContext(ExpiredDateContext);
  const cardOwnerProps = useContext(CardOwnerContext);
  const securityNumberProps = useContext(SecurityNumberContext);
  const passwordProps = useContext(PasswordContext);

  const isValidForm = [
    cardNumberProps.isValid,
    expiredDateProps.isValid,
    cardOwnerProps.isValid,
    securityNumberProps.isValid,
    passwordProps.isValid,
  ].every(valid => valid);

  const onAddFormSubmit = event => {
    event.preventDefault();

    isValidForm ? alert(MESSAGE.SAVE_INFO) : alert(MESSAGE.DENY_SAVE);
  };

  return (
    <FormContainer onSubmit={onAddFormSubmit}>
      <CardNumberInput {...cardNumberProps} />
      <ExpiredDateInput {...expiredDateProps} />
      <CardOwnerInput {...cardOwnerProps} />
      <SecurityNumberInput {...securityNumberProps} />
      <PasswordInput {...passwordProps} />
      <ButtonContainer>
        <SubmitButton width="51px" height="34px" hidden={!isValidForm}>
          다음
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
}

export default CardAddForm;
