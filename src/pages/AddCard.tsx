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
import theme from '../styles/theme';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
  cursor: pointer;

  & > p {
    font: ${theme.font.body};
    color: ${theme.color.grey300};
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
  const { cardCompany, checkCardCompany } = useCardCompany();

  const { isBottomSheetOpen, openBottomSheet, closeBottomSheet } =
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

  return (
    <>
      <Layout>
        <form onSubmit={handleSubmitCard}>
          <CardWrapper onClick={openBottomSheet}>
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
