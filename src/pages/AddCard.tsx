import { useContext } from 'react';
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
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
  const { cardCompany, checkCardCompany } = useCardCompany();

  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

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

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmitCard}>
          <Wrapper>
            <Card
              cardNumbers={cardNumbers}
              expiredDate={expiredDate}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
            />
          </Wrapper>
          <CardNumbers
            cardNumbers={cardNumbers}
            checkCardNumbers={checkCardNumbers}
          />
          <ExpiredDate
            expiredDate={expiredDate}
            checkExpiredDate={checkExpiredDate}
            validateDate={validateDate}
          />
          <CardOwnerName
            cardOwnerName={cardOwnerName}
            checkCardOwnerName={checkCardOwnerName}
          />
          <SecurityCode
            securityCode={securityCode}
            checkSecurityCode={checkSecurityCode}
          />
          <CardPassword password={password} checkPassword={checkPassword} />
          <ButtonWrapper>
            <NextButton disabled={disabled}>다음</NextButton>
          </ButtonWrapper>
        </form>
      </Layout>
      {isBottomSheetOpen && (
        <BottomSheet
          checkCardCompany={checkCardCompany}
          closeBottomSheet={closeBottomSheet}
        />
      )}
    </>
  );
};

export default AddCard;
