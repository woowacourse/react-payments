import { useState } from 'react';
import Card from '../Card/Card';
import CardNumberInput from '../CardNumberInput';
import CardOwnerInput from '../CardOwnerInput';
import CardPasswordInput from '../CardPasswordInput';
import ExpirationDateInput from '../ExpirationDateInput';
import SecurityCodeInput from '../SecurityCodeInput';
import styled from 'styled-components';
import { useCardListContext } from '../../contexts/CardListContexts';
import useOnChangeHandler from './hooks/useOnChangeHandler';
import {
  validateCardNumber,
  validateExpirationDate,
  validateMonth,
  validateOwner,
  validateYear,
} from './validation/card';
import { useCardContext } from '../../pages/CardRegistration/contexts/CardContext';

type CardRegistrationFormProps = {
  setPageCardAlias: () => void;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
  openModal: () => void;
};

type CardValidationError = {
  cardNumber: Error | null;
  expirationDate: Error | null;
  owner: Error | null;
  securityCode: Error | null;
  cardPassword: Error | null;
};

const CardRegistrationForm = ({ setPageCardAlias, setCurrentId, openModal }: CardRegistrationFormProps) => {
  const { card, setCard } = useCardContext();
  const { setCardList } = useCardListContext();

  const [cardError, setCardError] = useState<CardValidationError>({
    cardNumber: null,
    expirationDate: null,
    owner: null,
    securityCode: null,
    cardPassword: null,
  });

  const onSubmitCard: React.FormEventHandler = (e) => {
    e.preventDefault();

    try {
      validateExpirationDate(card.expirationDate);

      setCurrentId(card.id);
      setCardList((prev) => [...prev, card]);
      setPageCardAlias();
    } catch (error) {
      setCardError({
        ...cardError,
        expirationDate: error as Error,
      });
    }
  };

  const onChangeOwner: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const owner = e.target.value;

    try {
      validateOwner(owner);

      setCard((prev) => ({
        ...prev,
        owner,
      }));
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
  };

  const onChangeCardNumber = useOnChangeHandler({
    key: 'cardNumber',
    count: 4,
    setCard,
    setCardError,
    validate: validateCardNumber,
  });

  const onChangeMonth: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const month = e.target.value;

    try {
      validateMonth(month);

      setCard((prev) => ({
        ...prev,
        expirationDate: { ...prev.expirationDate, month },
      }));
      setCardError({
        ...cardError,
        expirationDate: null,
      });
    } catch (error) {
      setCardError({
        ...cardError,
        expirationDate: error as Error,
      });
    }
  };

  const onChangeYear: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const year = e.target.value;

    try {
      validateYear(year);

      setCard((prev) => ({
        ...prev,
        expirationDate: { ...prev.expirationDate, year },
      }));
      setCardError({
        ...cardError,
        expirationDate: null,
      });
    } catch (error) {
      setCardError({
        ...cardError,
        expirationDate: error as Error,
      });
    }
  };

  const onBlurOwner: React.FocusEventHandler<HTMLInputElement> = (e) => {
    const owner = e.target.value;

    try {
      validateOwner(owner);

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
  };

  return (
    <Styled.FormWrapper onSubmit={onSubmitCard}>
      <Styled.CardWrapper>
        <Card card={card} onClick={openModal} />
      </Styled.CardWrapper>

      <InputGroup>
        <CardNumberInput cardNumber={card.cardNumber} onChange={onChangeCardNumber} />
        <ErrorMessage>{cardError.cardNumber?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <ExpirationDateInput expirationDate={card.expirationDate} onChange={{ onChangeMonth, onChangeYear }} />
        <ErrorMessage>{cardError.expirationDate?.message}</ErrorMessage>
      </InputGroup>

      <InputGroup>
        <CardOwnerInput owner={card.owner} onChange={onChangeOwner} onBlur={onBlurOwner} />
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
      <SubmitButton disabled={false}>다음</SubmitButton>
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
