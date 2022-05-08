import { useState, useContext, useReducer } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { CardsContext } from '../../context/CardsProvider';
import { CARD_COMPANY_LIST } from '../../constant/index';
import AddCardForm from './cardForm/CardForm';
import Card from '../card/Card';
import CardCompany from './cardCompany/CardCompany';

function AddCard() {
  const { setCards } = useContext(CardsContext);
  const [modalVisible, handleModal] = useReducer((visible) => !visible, true);
  const navigate = useNavigate();
  const [card, setCard] = useState({
    id: uuid(),
    company: '',
    theme: '',
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

  const handleCardForm = () => {
    setCards((prevCards) => [...prevCards, card]);
    navigate('/react-payments/register');
  };

  const handleCompany = (company, theme) => {
    setCard((prevCardInfo) => ({
      ...prevCardInfo,
      company,
      theme,
    }));
    handleModal();
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
      <AddCardForm card={card} updateCard={updateCard} handleCardForm={handleCardForm} />
      {modalVisible && (
        <div className="modal-dimmed">
          <div className="modal">
            <div className="flex-wrap">
              {CARD_COMPANY_LIST.map(({ id, company, theme }) => (
                <CardCompany
                  key={id}
                  company={company}
                  theme={theme}
                  handleCompany={handleCompany}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddCard;
