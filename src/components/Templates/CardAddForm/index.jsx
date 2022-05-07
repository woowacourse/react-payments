import styled from 'styled-components';
import CardNumberInput from '../../Modules/CardNumberInput';
import ExpiredDateInput from '../../Modules/ExpiredDateInput';
import CardOwnerInput from '../../Modules/CardOwnerInput';
import SecurityNumberInput from '../../Modules/SecurityNumberInput';
import PasswordInput from '../../Modules/PasswordInput';
import SubmitButton from '../../Atoms/SubmitButton';
import useCardAddForm from '../../../hooks/Form/useCardAddForm';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function CardAddForm({ link }) {
  const { isValidForm, onAddFormSubmit } = useCardAddForm(link);

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
