import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import { CardType } from '../types/Card';
import useAddCard from '../hooks/useAddCard';
import useCardNumbers from '../hooks/useCardNumbers';
import useCardOwnerName from '../hooks/useCardOwnerName';
import useCardPassword from '../hooks/useCardPassword';
import useSecurityCode from '../hooks/useSecurityCode';

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
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

const AddCard = ({ cards, setCards }: SetCardsProps) => {
  const { cardNumbers, checkCardNumbers } = useCardNumbers();
  const { cardOwnerName, checkCardOwnerName } = useCardOwnerName();
  const { password, checkPassword } = useCardPassword();
  const { securityCode, checkSecurityCode } = useSecurityCode();
  const { expiredDate, setExpiredDate, disabled } = useAddCard();

  const navigate = useNavigate();

  const handleSetCards = () => {
    setCards([
      ...cards,
      { id: uuidv4(), cardNumbers, expiredDate, cardOwnerName },
    ]);
    navigate('/');
  };

  return (
    <>
      <Header page="add-card" />
      <form onSubmit={handleSetCards}>
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
          setExpiredDate={setExpiredDate}
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
