import styled from 'styled-components';
// import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { CardInfo, CardNumbers, ExpirationDate } from '../types/card';
// import InputField from './InputField';
import CardNumberInput from './CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput';
import UserNameInput from './UserNameInput';
import { Dispatch, SetStateAction, useState } from 'react';
import { ShowComponents } from '../types/showCompents';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface HandleInput {
  setCardNumbers: Dispatch<SetStateAction<CardNumbers>>
  setExpirationDate: Dispatch<SetStateAction<ExpirationDate>>
  setUserName: (value: string) => void;
}

export default function InputForm({
  cardInfo : {cardNumbers, expirationDate},
  handleInput : {setCardNumbers, setExpirationDate, setUserName},
}: {
  cardInfo: CardInfo;
  handleInput: HandleInput
}) {
  const [showComponent, setShowComponent] = useState<ShowComponents>({cardNumberInput : true, expirationDateInput: false, userNameInput: false})
  return (
    <FormContainer>
      {showComponent.userNameInput && <UserNameInput handleInput={setUserName}/>}  
      {showComponent.expirationDateInput && <ExpirationDateInput expirationDate={expirationDate} handleInput={setExpirationDate} handleShowComponent = {setShowComponent}/>}
      {showComponent.cardNumberInput && <CardNumberInput
        cardNumbers={cardNumbers}
        handleInput={setCardNumbers}
        handleShowComponent = {setShowComponent}
      />}
    </FormContainer>
  );
}
