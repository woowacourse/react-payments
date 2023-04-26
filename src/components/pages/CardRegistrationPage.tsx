import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../common/Header';
import CardItem from '../common/CardItem';
import CardForm from '../cardForm/CardForm';
import { LeftArrowIcon } from '../../assets/icons';
import type { CardItemInfo } from '../../types/Card';
import { cardLocalStorage } from '../domain/CardLocalStorage';

interface CardRegistrationPageProps {
  bankName: string;
  onOpen: () => void;
  handleNewCardId: (cardItem: CardItemInfo) => void;
}

const CardRegistrationPage = ({
  bankName,
  onOpen,
  handleNewCardId,
}: CardRegistrationPageProps) => {
  const [cardItem, setCardItem] = useState<CardItemInfo>({
    id: 0,
    cardNumber: ['', '', '', ''],
    expirationDate: ['', ''],
    name: '',
    bankName: '',
  });

  const handleChangeForm = (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => {
    const updatedCard = {
      id: Date.now(),
      cardNumber,
      expirationDate,
      name,
      bankName,
    };
    setCardItem(updatedCard);
  };

  const handleSubmitForm = () => {
    cardLocalStorage.addCard(cardItem);
    handleNewCardId(cardItem);
  };

  useEffect(() => {
    setCardItem((prevState) => ({
      ...prevState,
      bankName,
    }));
  }, [bankName]);

  return (
    <>
      <Header title='카드추가' leading={<BackButton />} />
      <CardItemContainer>
        <CardItem card={cardItem} onOpen={onOpen} />
      </CardItemContainer>
      <BankChangeGuide>
        은행사 변경을 원하시면 위 카드의 은행사 이름을 눌러주세요
      </BankChangeGuide>
      <CardForm
        onSubmitForm={handleSubmitForm}
        onChangeForm={handleChangeForm}
      />
    </>
  );
};

const BackButton = () => {
  return (
    <Link to={'/'}>
      <LeftArrowIcon />
    </Link>
  );
};

const CardItemContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const BankChangeGuide = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--red-color);
`;

export default CardRegistrationPage;
