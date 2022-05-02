import styled from 'styled-components';
import CardNumberInput from '../components/Modules/CardNumberInput';
import ExpiredDateInput from '../components/Modules/ExpiredDateInput';
import CardOwnerInput from '../components/Modules/CardOwnerInput';
import SecurityNumberInput from '../components/Modules/SecurityNumberInput';
import PasswordInput from '../components/Modules/PasswordInput';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: pink;
  width: 100%;
  height: 100%;
`;

function CardAddForm() {
  return (
    <FormContainer>
      <CardNumberInput />
      <ExpiredDateInput />
      <CardOwnerInput />
      <SecurityNumberInput />
      <PasswordInput />
    </FormContainer>
  );
}

export default CardAddForm;
