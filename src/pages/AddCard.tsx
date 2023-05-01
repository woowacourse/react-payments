import { FormEvent } from 'react';
import { useState, useContext } from 'react';
import Card from '../components/Card';
import CardInputForm from '../components/CardInputForm';
import Header from '../components/common/Header';
import Page from '../components/common/Page';
import ModalPortal from '../components/ModalPortal';
import { CardType } from '../types';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import { ModalContext } from '../store/modalContext';
import ModalBanks from '../components/ModalBanks';
import { useNavigate } from 'react-router-dom';
import { LOCALSTORAGE_KEY } from '../constants';

const AddCard = () => {
  const [card, setCard] = useState<CardType>({
    cardNumber: '',
    expiredDate: '',
    ownerName: '',
    cvc: '',
    password: ['', ''],
    color: 'black',
    bankName: '',
  });

  const navigate = useNavigate();

  const registerCard = (e: FormEvent) => {
    const cards = getLocalStorage(LOCALSTORAGE_KEY.CARD);
    setLocalStorage(LOCALSTORAGE_KEY.CARD, [...cards, card]);

    navigate('/CardName');
  };

  const { isModalOpen, closeModal } = useContext(ModalContext) ?? {
    isModalOpen: true,
    closeModal: () => {},
  };

  return (
    <Page>
      <Header title="카드 추가" goToMainPage={true} />
      <Card
        color={card.color}
        ownerName={card.ownerName}
        expiredDate={card.expiredDate}
        cardNumber={card.cardNumber}
        bankName={card.bankName}
        cvc={card.cvc}
        password={card.password}
      />
      <CardInputForm card={card} setCard={setCard} onSubmit={e => registerCard(e)} />
      {isModalOpen && (
        <ModalPortal closeEvent={closeModal}>
          <ModalBanks setCard={setCard} card={card} />
        </ModalPortal>
      )}
    </Page>
  );
};

export default AddCard;
