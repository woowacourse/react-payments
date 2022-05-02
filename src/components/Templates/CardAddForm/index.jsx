import styled from 'styled-components';
import CardNumberInput from '../../Modules/CardNumberInput';
import ExpiredDateInput from '../../Modules/ExpiredDateInput';
import CardOwnerInput from '../../Modules/CardOwnerInput';
import SecurityNumberInput from '../../Modules/SecurityNumberInput';
import PasswordInput from '../../Modules/PasswordInput';
import SubmitButton from '../../Atoms/SubmitButton';

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
  return (
    <FormContainer>
      <CardNumberInput />
      <ExpiredDateInput />
      <CardOwnerInput />
      <SecurityNumberInput />
      <PasswordInput />
      <ButtonContainer>
        <SubmitButton width="51px" height="34px" hidden={false}>
          다음
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
}

export default CardAddForm;
