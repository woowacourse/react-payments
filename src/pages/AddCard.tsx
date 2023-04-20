import { useEffect, useState } from 'react';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import { CardType } from '../types/Card';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface SetCardsProps {
  cards: CardType[];
  setCards: React.Dispatch<React.SetStateAction<CardType[]>>;
}

const AddCard = ({ cards, setCards }: SetCardsProps) => {
  const [cardNumbers, setCardNumbers] = useState<Record<number, string>>({
    0: '',
    1: '',
    2: '',
    3: '',
  });
  const [expiredDate, setExpiredDate] = useState<Record<number, string>>({
    0: '',
    1: '',
  });
  const [ownerName, setOwnerName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState<Record<number, string>>({
    0: '',
    1: '',
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const { 0: expiredMonth, 1: expiredDay } = expiredDate;
    const { 0: first, 1: second, 2: third, 3: fourth } = cardNumbers;
    const { 0: firstPassword, 1: secondPassword } = password;
    if (
      first.length !== 4 ||
      second.length !== 4 ||
      third.length !== 4 ||
      fourth.length !== 4 ||
      !expiredMonth ||
      !expiredDay ||
      !securityCode ||
      !firstPassword ||
      !secondPassword
    ) {
      setIsActive(false);
      return;
    }
    setIsActive(true);
  }, [expiredDate, cardNumbers, securityCode, password]);

  const handleSetCards = () => {
    setCards([
      ...cards,
      { id: uuidv4(), cardNumbers, expiredDate, cardOwnerName: ownerName },
    ]);
  };

  return (
    <>
      <Card
        cardNumbers={cardNumbers}
        expiredDate={expiredDate}
        cardOwnerName={ownerName}
      ></Card>
      <CardNumbers cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <ExpiredDate expiredDate={expiredDate} setExpiredDate={setExpiredDate} />
      <CardOwnerName ownerName={ownerName} setOwnerName={setOwnerName} />
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
