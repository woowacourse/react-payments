import { useState } from 'react';
import Card from '../Card/Card';
import CardNumberInput from '../CardNumberInput';
import CardOwnerInput from '../CardOwnerInput';
import CardPasswordInput from '../CardPasswordInput';
import ExpirationDateInput from '../ExpirationDateInput';
import SecurityCodeInput from '../SecurityCodeInput';
import styled from 'styled-components';
import useOnChangeHandler from './hooks/useOnChangeHandler';
import { useCardListContext } from '../../contexts/CardListContexts';
import type { CardInformation, CardType } from '../../domain/types/card';

type CardRegistrationFormProps = {
  setPageCardAlias: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  cardType: CardType;
  openModal: () => void;
};

const CardRegistrationForm = ({ setPageCardAlias, setCurrentId, cardType, openModal }: CardRegistrationFormProps) => {
  const [cardNumber, setCardNumber] = useState<CardInformation['cardNumber']>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<CardInformation['expirationDate']>(['', '']);
  const [owner, setOwner] = useState<CardInformation['owner']>('');

  const { setCardList } = useCardListContext();

  const onChangeCardNumber = useOnChangeHandler({
    setState: setCardNumber,
    count: 4,
  });

  const onChangeExpiraiontDate = useOnChangeHandler({
    setState: setExpirationDate,
    count: 2,
  });

  const onSubmitCard: React.FormEventHandler = (e) => {
    e.preventDefault();

    const newId = Date.now();

    setCurrentId(newId);
    setCardList((prev) => [...prev, { id: newId, cardNumber, expirationDate, owner, cardType }]);
    setPageCardAlias();
  };

  return (
    <Styled.FormWrapper onSubmit={onSubmitCard}>
      <Styled.CardWrapper>
        <Card
          cardType={cardType}
          owner={owner}
          cardNumber={cardNumber}
          expirationDate={expirationDate}
          onClick={openModal}
        />
      </Styled.CardWrapper>

      <InputGroup>
        <CardNumberInput onChange={onChangeCardNumber} />
        <ErrorMessage>test error</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <ExpirationDateInput onChange={onChangeExpiraiontDate} />
        <ErrorMessage>test error</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <CardOwnerInput owner={owner} onChange={(e) => setOwner(e.target.value)} />
        <ErrorMessage>test error</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <SecurityCodeInput />
        <ErrorMessage>test error</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <CardPasswordInput />
        <ErrorMessage>test error</ErrorMessage>
      </InputGroup>
      <SubmitButton>다음</SubmitButton>
    </Styled.FormWrapper>
  );
};

export default CardRegistrationForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
`;

const CardWrapper = styled.div`
  align-self: center;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 45px;
  border-radius: 7px;
  background-color: #2bc1bc;
  color: white;

  :disabled {
    background-color: #ecebf1;
    color: #737373;
  }
`;

const InputGroup = styled.p`
  position: relative;
`;

const ErrorMessage = styled.div`
  position: absolute;
  top: 100%;

  font-size: 14px;
  color: red;
`;

const Styled = {
  FormWrapper,
  CardWrapper,
  SubmitButton,
  ErrorMessage,
};
