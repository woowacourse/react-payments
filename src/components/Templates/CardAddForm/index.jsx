import { useContext } from 'react';
import styled from 'styled-components';
import CardNumberInput from '../../Modules/CardNumberInput';
import ExpiredDateInput from '../../Modules/ExpiredDateInput';
import CardOwnerInput from '../../Modules/CardOwnerInput';
import SecurityNumberInput from '../../Modules/SecurityNumberInput';
import PasswordInput from '../../Modules/PasswordInput';
import SubmitButton from '../../Atoms/SubmitButton';
import { MESSAGE } from '../../../constant/message';
import { useNavigate } from 'react-router';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const isValidForm = false;

function CardAddForm({ link }) {
  const navigator = useNavigate();

  const onAddFormSubmit = event => {
    event.preventDefault();

    isValidForm ? navigator(link) : alert(MESSAGE.DENY_SAVE);
  };

  return (
    <FormContainer onSubmit={onAddFormSubmit}>
      <CardNumberInput />
      <ExpiredDateInput />
      <CardOwnerInput />
      <SecurityNumberInput />
      <PasswordInput />
      <ButtonContainer>
        <SubmitButton hidden={!isValidForm}>다음</SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
}

export default CardAddForm;
