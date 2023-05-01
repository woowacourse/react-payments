import { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import { CardContext } from '../context/CardProvider';
import {
  useAddCard,
  useCardNumbers,
  useCardOwnerName,
  useCardPassword,
  useExpiredDate,
  useSecurityCode,
  useCardCompany,
  useBottomSheet,
} from '../hooks';
import { v4 as uuidv4 } from 'uuid';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
  cursor: pointer;

  & > p {
    font: ${(props) => props.theme.font.body};
    color: ${(props) => props.theme.color.grey300};
    margin-bottom: 4px;
  }
`;

const NextButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#969696' : '#000')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddCard = () => {
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
          <CardWrapper onClick={onOpenBottomSheet}>
            <p>카드를 클릭해 카드사를 변경할 수 있습니다.</p>
            <Card
              cardNumbers={cardNumbers}
              expiredDate={expiredDate}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
            />
          </CardWrapper>
          <CardNumbers
            cardNumbers={cardNumbers}
            checkCardNumbers={checkCardNumbers}
            ref={refs.cardNumbers}
            nextRef={refs.expiredDate}
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
          <ButtonWrapper>
            <NextButton disabled={disabled}>다음</NextButton>
          </ButtonWrapper>
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

export default AddCard;
