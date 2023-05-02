import CardNumbers from '../components/CardNumbers/CardNumbers';
import CardExpiredDate from '../components/CardExpiredDate/CardExpiredDates';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import CardSecurityCode from '../components/CardSecurityCode/CardSecurityCode';
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
import RefProvider from '../contexts/RefProvider';

const AddCard = ({ cards, setCards }: CardList) => {
  const {
    cardNumbers,
    cardNumbersError,
    handleCardNumbers,
    expiredDates,
    expiredDatesError,
    handleExpiredDates,
    ownerName,
    isSetOwnerName,
    securityCode,
    isSetSecurityCode,
    passwords,
    isSetPasswords,
    cardCompany,
    setCardCompany,
    isDisabledForm,
  } = useAddCard();
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSetCards = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDisabledForm) {
      setErrorMessage(
        '잘못된 정보입니다. 올바른 카드 정보를 입력했는지 확인해주세요.'
      );
      return;
    }

    setCards([
      ...cards,
      {
        id: uuidv4(),
        cardNumbers,
        expiredDates,
        cardOwnerName: ownerName,
        cardCompany,
      },
    ]);
    navigate('/add-card-alias');
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <RefProvider>
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
              cardOwnerName={ownerName}
              cardCompany={cardCompany}
              setIsModalOpen={setIsModalOpen}
            />
          </Styled.CardWrapper>
          <CardNumbers
            cardNumbers={cardNumbers}
            errorMessage={cardNumbersError}
            handleCardNumbers={handleCardNumbers}
          />
          <CardExpiredDate
            expiredDates={expiredDates}
            errorMessage={expiredDatesError}
            handleExpiredDates={handleExpiredDates}
          />
          <CardOwnerName
            ownerName={ownerName}
            isSetOwnerName={isSetOwnerName}
          />
          <CardSecurityCode
            securityCode={securityCode}
            isSetSecurityCode={isSetSecurityCode}
          />
          <CardPassword passwords={passwords} isSetPasswords={isSetPasswords} />
          <Styled.ButtonWrapper>
            <SubmitButton
              textContent="다음"
              cursor={!isDisabledForm}
              color={!isDisabledForm}
            />
          </Styled.ButtonWrapper>
        </form>
        <Styled.ErrorTextWrapper>{errorMessage}</Styled.ErrorTextWrapper>
      </Styled.PageWrapper>
      {isModalOpen && (
        <CardCompanyModal
          cardCompany={cardCompany}
          setIsModalOpen={setIsModalOpen}
          setCardCompany={setCardCompany}
        />
      )}
    </RefProvider>
  );
};

export default AddCard;
