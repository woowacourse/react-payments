import { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCardForm from './cardForm/AddCardForm';
import Card from '../card/Card';

function AddCard() {
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

  const alertAddedCard = () => {
    alert(`카드를 추가하였습니다. ${card.ownerName}의 카드`);
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
      <AddCardForm card={card} updateCard={updateCard} addCard={alertAddedCard} />
    </>
  );
}

export default AddCard;
