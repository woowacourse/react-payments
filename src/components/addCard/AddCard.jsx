import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AddCardForm from './cardForm/AddCardForm';
import Card from '../card/Card';
import { CardsContext } from '../../store/cards';

function AddCard() {
  const { cards, setCards } = useContext(CardsContext);
  const [card, setCard] = useState({
    firstCardNumber: '',
    secondCardNumber: '',
    thirdCardNumber: '',
    fourthCardNumber: '',
    expireMonth: '',
    expireYear: '',
    ownerName: '',
    securityCode: '',
    firstPassword: '',
    secondPassword: '',
  });

  const updateCard = (name, value) => {
    setCard((prevCard) => {
      return { ...prevCard, [name]: value };
    });
  };

  const addCardList = () => {
    setCards((prevCards) => [...prevCards, card]);
  };

  return (
    <>
      <div className="header-wrapper">
        <Link to="/react-payments">
          <div className="back-button" />
        </Link>
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card card={card} />
      <AddCardForm card={card} updateCard={updateCard} addCardList={addCardList} />
    </>
  );
}

export default AddCard;
