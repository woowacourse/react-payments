import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import { CardType } from '../types/Card';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useAddCard from '../hooks/useAddCard';

interface SetCardsProps {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

const AddCard = ({ cards, setCards }: SetCardsProps) => {
  const {
    cardNumbers,
    setCardNumbers,
    expiredDate,
    setExpiredDate,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    password,
    setPassword,
    isActive,
  } = useAddCard();

  const handleSetCards = () => {
    setCards([
      ...cards,
      { id: uuidv4(), cardNumbers, expiredDate, cardOwnerName },
    ]);
  };

  return (
    <>
      <Card
        cardNumbers={cardNumbers}
        expiredDate={expiredDate}
        cardOwnerName={cardOwnerName}
      ></Card>
      <CardNumbers cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <ExpiredDate expiredDate={expiredDate} setExpiredDate={setExpiredDate} />
      <CardOwnerName
        cardOwnerName={cardOwnerName}
        setCardOwnerName={setCardOwnerName}
      />
      <SecurityCode
        securityCode={securityCode}
        setSecurityCode={setSecurityCode}
      />
      <CardPassword password={password} setPassword={setPassword} />
      {isActive && (
        <Link to={'/'}>
          <button onClick={handleSetCards}>다음</button>
        </Link>
      )}
    </>
  );
};

export default AddCard;
