import CardPreview from 'Pages/RegisterPage/CardPreview';
import { AddCardContext } from 'context/CardContext';
import { useContext } from 'react';

const CardNamePage = () => {
  const { cardNumber, date, name, bank } = useContext(AddCardContext);
  const cardInfo = { ...cardNumber, ...date, ...name, ...bank };

  return <CardPreview cardInfo={cardInfo}></CardPreview>;
};

export default CardNamePage;
