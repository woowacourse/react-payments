import styled from 'styled-components';
// import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { CardInfo, CardNumbers, ExpirationDate } from '../types/card';
// import InputField from './InputField';
import CardNumberInput from './CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput';
import UserNameInput from './UserNameInput';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface HandleInput {
  setCardNumbers: (value: CardNumbers) => void;
  setExpirationDate: (value: ExpirationDate) => void;
  setUserName: (value: string) => void;
}

export default function InputForm({
  cardInfo : {cardNumbers, expirationDate},
  handleInput : {setCardNumbers, setExpirationDate, setUserName},
}: {
  cardInfo: CardInfo;
  handleInput: HandleInput
}) {
  return (
    <FormContainer>
      <CardNumberInput
        cardNumber={cardNumbers}
        handleInput={setCardNumbers}
      />
      <ExpirationDateInput expirationDate={expirationDate} handleInput={setExpirationDate}/>
      <UserNameInput handleInput={setUserName}/>    
    </FormContainer>
  );
}
