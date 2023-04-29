import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useAddCard from '../hooks/useAddCard';
import CardCompanyModal from '../components/CardCompanyModal/CardCompanyModal';
import { useEffect, useState } from 'react';
import CardLabel from '../components/@common/CardLabel';
import * as Styled from './AddCard.styles';
import SubmitButton from '../components/@common/SubmitButton';
import CardList from '../types/CardList';

const AddCard = ({ cards, setCards }: CardList) => {
  const {
    cardNumbers,
    isSetCardNumbers,
    expiredDates,
    isSetExpiredDates,
    cardOwnerName,
    setCardOwnerName,
    securityCode,
    setSecurityCode,
    passwords,
    setPasswords,
    cardCompany,
    setCardCompany,
    isDisabledForm,
  } = useAddCard();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSetCards = () => {
    setCards([
      ...cards,
      { id: uuidv4(), cardNumbers, expiredDates, cardOwnerName, cardCompany },
    ]);
    navigate('/add-card-alias');
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      <Styled.PageWrapper>
        <Header page="add-card" titleContent="&lt; &nbsp; 카드 추가" />
        <form onSubmit={handleSetCards}>
          <Styled.CardWrapper>
            <Styled.CardLabelWrapper>
              {!isModalOpen && (
                <CardLabel
                  labelText="카드사를 수정하려면 카드를 클릭하세요."
                  color="#969696"
                />
              )}
            </Styled.CardLabelWrapper>
            <Card
              cardNumbers={cardNumbers}
              expiredDates={expiredDates}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
              setIsModalOpen={setIsModalOpen}
            />
          </Styled.CardWrapper>
          <CardNumbers
            cardNumbers={cardNumbers}
            isSetCardNumbers={isSetCardNumbers}
          />
          <ExpiredDate
            expiredDates={expiredDates}
            isSetExpiredDates={isSetExpiredDates}
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
          <Styled.ButtonWrapper>
            <SubmitButton
              textContent="다음"
              cursor={!isDisabledForm}
              color={!isDisabledForm}
            />
          </Styled.ButtonWrapper>
        </form>
      </Styled.PageWrapper>
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
