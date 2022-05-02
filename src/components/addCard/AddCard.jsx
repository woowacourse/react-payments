import { useState } from 'react';
import AddCardForm from '../addCardForm/AddCardForm';
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
    password: '',
  });

  const updateCard = (cardForm) => {
    const {
      firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
      expireMonth,
      expireYear,
      ownerName,
      securityCode,
      firstPassword,
      secondPassword,
    } = cardForm;

    setCard({
      firstCardNumber,
      secondCardNumber,
      thirdCardNumber,
      fourthCardNumber,
      expireMonth,
      expireYear,
      ownerName,
      securityCode,
      password: firstPassword + secondPassword,
    });
  };

  const alertAddedCard = (submittedCard) => {
    alert(`카드를 추가하였습니다. ${submittedCard.ownerName}의 카드`);
  };

  return (
    <>
      <div className="header-wrapper">
        <div className="back-button" />
        <h2 className="page-title">카드 추가</h2>
      </div>
      <Card card={card} />
      <AddCardForm updateCard={updateCard} addCard={alertAddedCard} />
    </>
  );
}

export default AddCard;
