import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './AddCardForm.styles';
import { CardContext } from '../../context/CardProvider';
import {
  useCardNumbers,
  useCardOwnerName,
  useCardPassword,
  useSecurityCode,
  useExpiredDate,
  useAddCard,
  useBottomSheet,
  useCardCompany,
} from '../../hooks';
import Card from '../Card/Card';
import CardNumbers from '../CardNumbers/CardNumbers';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardPassword from '../CardPassword/CardPassword';
import ExpiredDate from '../ExpiredDate/ExpiredDate';
import Layout from '../Layout/Layout';
import BottomSheet from '../BottomSheet/BottomSheet';
import SecurityCode from '../SecurityCode/SecurityCode';
import { v4 as uuidv4 } from 'uuid';

const AddCardForm = () => {
  const { cardNumbers, checkCardNumbers } = useCardNumbers();
  const { cardOwnerName, checkCardOwnerName } = useCardOwnerName();
  const { password, checkPassword } = useCardPassword();
  const { securityCode, checkSecurityCode } = useSecurityCode();
  const { expiredDate, checkExpiredDate, validateDate } = useExpiredDate();
  const { cardCompany, onSetCardCompany } = useCardCompany();
  const { isBottomSheetOpen, onOpenBottomSheet, onCloseBottomSheet } =
    useBottomSheet();

  const { disabled } = useAddCard(
    cardNumbers,
    expiredDate,
    securityCode,
    password
  );

  const navigate = useNavigate();

  const { setCard } = useContext(CardContext);

  const handleSubmitCard = () => {
    const newCard = {
      id: uuidv4(),
      cardNumbers,
      expiredDate,
      cardOwnerName,
      cardCompany,
    };
    setCard(newCard);
    navigate('/register-card');
  };

  const refs = {
    cardNumbers: useRef<HTMLInputElement>(null),
    expiredDate: useRef<HTMLInputElement>(null),
    cardOwnerName: useRef<HTMLInputElement>(null),
    securityCode: useRef<HTMLInputElement>(null),
    password: useRef<HTMLInputElement>(null),
  };

  useEffect(() => {
    if (!isBottomSheetOpen) refs.cardNumbers.current?.focus();
  }, [isBottomSheetOpen]);

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmitCard}>
          <Styled.CardWrapper onClick={onOpenBottomSheet}>
            <p>카드를 클릭해 카드사를 변경할 수 있습니다.</p>
            <Card
              cardNumbers={cardNumbers}
              expiredDate={expiredDate}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
            />
          </Styled.CardWrapper>
          <CardNumbers
            cardNumbers={cardNumbers}
            checkCardNumbers={checkCardNumbers}
            ref={refs.cardNumbers}
            nextRef={refs.expiredDate}
            onSetCardCompany={onSetCardCompany}
          />
          <ExpiredDate
            expiredDate={expiredDate}
            checkExpiredDate={checkExpiredDate}
            validateDate={validateDate}
            ref={refs.expiredDate}
            nextRef={refs.cardOwnerName}
          />
          <CardOwnerName
            cardOwnerName={cardOwnerName}
            checkCardOwnerName={checkCardOwnerName}
            ref={refs.cardOwnerName}
          />
          <SecurityCode
            securityCode={securityCode}
            checkSecurityCode={checkSecurityCode}
            ref={refs.securityCode}
            nextRef={refs.password}
          />
          <CardPassword
            password={password}
            checkPassword={checkPassword}
            ref={refs.password}
          />
          <Styled.ButtonWrapper>
            <Styled.NextButton disabled={disabled}>다음</Styled.NextButton>
          </Styled.ButtonWrapper>
        </form>
      </Layout>
      {isBottomSheetOpen && (
        <BottomSheet
          onSetCardCompany={onSetCardCompany}
          closeBottomSheet={onCloseBottomSheet}
        />
      )}
    </>
  );
};

export default AddCardForm;
