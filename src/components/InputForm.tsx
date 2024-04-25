import styled from 'styled-components';
// import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { CardBrand, CardInfo, CardNumbers, ExpirationDate, UserName } from '../types/card';
// import InputField from './InputField';
import CardNumberInput from './CardNumberInput';
import ExpirationDateInput from './ExpirationDateInput';
import UserNameInput from './UserNameInput';
import { Dispatch, SetStateAction, useState } from 'react';
import { ShowComponents } from '../types/showCompents';
import CardDropDown from './CardDropDown';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface HandleInput {
  setCardNumbers: Dispatch<SetStateAction<CardNumbers>>
  setExpirationDate: Dispatch<SetStateAction<ExpirationDate>>
  setUserName: Dispatch<SetStateAction<UserName>>
  setCardBrand : Dispatch<SetStateAction<CardBrand>>

}

export default function InputForm({
  cardInfo : {cardNumbers, expirationDate, userName, cardBrand},
  handleInput : {setCardNumbers, setExpirationDate, setUserName, setCardBrand},
}: {
  cardInfo: CardInfo;
  handleInput: HandleInput
}) {
  const [showComponent, setShowComponent] = useState<ShowComponents>({cardNumberInput : true, cardDropDown:false, expirationDateInput: false, userNameInput: false})
  return (
    <FormContainer>
      {showComponent.userNameInput && <UserNameInput userName = {userName} handleInput={setUserName} handleShowComponent = {setShowComponent}/>}  
      {showComponent.expirationDateInput && <ExpirationDateInput expirationDate={expirationDate} handleInput={setExpirationDate} handleShowComponent = {setShowComponent}/>}
      {showComponent.cardDropDown && <CardDropDown cardBrand={cardBrand} handleInput = {setCardBrand} handleShowComponent = {setShowComponent}/>}
      {showComponent.cardNumberInput && <CardNumberInput
        cardNumbers={cardNumbers}
        handleInput={setCardNumbers}
        handleShowComponent = {setShowComponent}
      />}
    </FormContainer>
  );
}
