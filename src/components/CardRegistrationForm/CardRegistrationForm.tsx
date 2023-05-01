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

const validateOwner = (owner: string) => {
  if (/[^A-Za-z\s]/g.test(owner)) {
    throw new Error('소유자 이름은 영어만 입력해주세요.');
  }
};

type CardRegistrationFormProps = {
  setPageCardAlias: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  cardType: CardType;
  openModal: () => void;
};

type CardValidationError = {
  cardNumber: Error | null;
  expirationDate: Error | null;
  owner: Error | null;
  securityCode: Error | null;
  cardPassword: Error | null;
};

const CardRegistrationForm = ({ setPageCardAlias, setCurrentId, cardType, openModal }: CardRegistrationFormProps) => {
  const [cardNumber, setCardNumber] = useState<CardInformation['cardNumber']>(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState<CardInformation['expirationDate']>(['', '']);
  const [owner, setOwner] = useState<CardInformation['owner']>('');
  const [cardError, setCardError] = useState<CardValidationError>({
    cardNumber: null,
    expirationDate: null,
    owner: null,
    securityCode: null,
    cardPassword: null,
  });

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

  const submitDisabled =
    cardError.cardNumber ||
    cardError.cardPassword ||
    cardError.owner ||
    cardError.securityCode ||
    cardError.expirationDate
      ? true
      : false;

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
        <ErrorMessage>{cardError.cardNumber?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <ExpirationDateInput onChange={onChangeExpiraiontDate} />
        <ErrorMessage>{cardError.expirationDate?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <CardOwnerInput
          owner={owner}
          onChange={(e) => {
            try {
              const owner = e.target.value;
              validateOwner(owner);
              setOwner(e.target.value);
              setCardError({
                ...cardError,
                owner: null,
              });
            } catch (error) {
              setCardError({
                ...cardError,
                owner: error as Error,
              });
            }
          }}
        />
        <ErrorMessage>{cardError.owner?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <SecurityCodeInput />
        <ErrorMessage>{cardError.securityCode?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <CardPasswordInput />
        <ErrorMessage>{cardError.cardPassword?.message}</ErrorMessage>
      </InputGroup>
      <SubmitButton disabled={submitDisabled}>다음</SubmitButton>
    </Styled.FormWrapper>
  );
};

export default CardRegistrationForm;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
  top: 105%;

  font-size: 10px;
  color: red;
`;

const Styled = {
  FormWrapper,
  CardWrapper,
  SubmitButton,
  ErrorMessage,
};
