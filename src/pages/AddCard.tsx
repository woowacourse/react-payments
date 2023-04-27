import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import CardType from '../types/Card';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useAddCard from '../hooks/useAddCard';
import styled from 'styled-components';
import CardCompanyModal from '../components/CardCompanyModal/CardCompanyModal';
import { useEffect, useState } from 'react';
import CardLabel from '../components/@common/CardLabel';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 192px;
  margin-top: 28px;
  font-size: 14px;
`;

const CardLabelWrapper = styled.div`
  height: 16px;
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
  const {
    cardNumbers,
    setCardNumbers,
    expiredDates,
    setExpiredDates,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    passwords,
    setPasswords,
    isDisabledForm,
  } = useAddCard();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [cardCompany, setCardCompany] = useState<string>('');
  const navigate = useNavigate();

  const handleSetCards = () => {
    setCards([
      ...cards,
      { id: uuidv4(), cardNumbers, expiredDates, cardOwnerName, cardCompany },
    ]);
    navigate('/');
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <Header page="add-card" titleContent="&lt; &nbsp; 카드 추가" />
      <form onSubmit={handleSetCards}>
        <CardWrapper>
          <CardLabelWrapper>
            {!isModalOpen && (
              <CardLabel
                labelText="카드사를 수정하려면 카드를 클릭하세요."
                color="#969696"
              />
            )}
          </CardLabelWrapper>
          <Card
            cardNumbers={cardNumbers}
            expiredDates={expiredDates}
            cardOwnerName={cardOwnerName}
            cardCompany={cardCompany}
            setIsModalOpen={setIsModalOpen}
          />
        </CardWrapper>
        <CardNumbers
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <ExpiredDate
          expiredDates={expiredDates}
          setExpiredDates={setExpiredDates}
        />
        <CardOwnerName
          cardOwnerName={cardOwnerName}
          setCardOwnerName={setCardOwnerName}
        />
        <SecurityCode
          securityCode={securityCode}
          setSecurityCode={setSecurityCode}
        />
        <CardPassword passwords={passwords} setPasswords={setPasswords} />
        <ButtonWrapper>
          <NextButton disabled={isDisabledForm}>다음</NextButton>
        </ButtonWrapper>
      </form>
      {isModalOpen && (
        <CardCompanyModal
          setIsModalOpen={setIsModalOpen}
          setCardCompany={setCardCompany}
        />
      )}
    </>
  );
};

export default AddCard;
