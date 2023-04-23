import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import {
  useAddCard,
  useCardNumbers,
  useCardOwnerName,
  useCardPassword,
  useExpiredDate,
  useSecurityCode,
} from '../hooks';

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

interface SetCardsProps {
  handleSetCards: (
    cardNumbers: Record<number, string>,
    expiredDate: Record<number, string>,
    cardOwnerName: string
  ) => void;
}

const AddCard = ({ handleSetCards }: SetCardsProps) => {
  const { cardNumbers, checkCardNumbers } = useCardNumbers();
  const { cardOwnerName, checkCardOwnerName } = useCardOwnerName();
  const { password, checkPassword } = useCardPassword();
  const { securityCode, checkSecurityCode } = useSecurityCode();
  const { expiredDate, checkExpiredDate, validateDate } = useExpiredDate();
  const { disabled } = useAddCard(
    cardNumbers,
    expiredDate,
    securityCode,
    password
  );

  const navigate = useNavigate();

  return (
    <>
      <Header page="add-card" />
      <form
        onSubmit={() => {
          handleSetCards(cardNumbers, expiredDate, cardOwnerName);
          navigate('/');
        }}
      >
        <Wrapper>
          <Card
            cardNumbers={cardNumbers}
            expiredDate={expiredDate}
            cardOwnerName={cardOwnerName}
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
    </>
  );
};

export default AddCard;
