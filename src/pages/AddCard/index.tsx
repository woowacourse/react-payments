import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import AddCardForm from './components/AddCardForm';
import Header from '../../components/Header';
import BackButtonImg from '../../asset/back_button.png';
import './index.css';
import useInput from '../../hooks/useInput';
import {
  isSelectCardType,
  isValidCardNumber,
  isValidExpiredMonthFormat,
  isValidExpiredYearFormat,
  isValidOwnerName,
  isValidPassword,
  isValidSecurityCode,
} from './domain/dispatcher';
import CardNameBottomSheet from './components/CardNameBottomSheet';
import useBottomSheet from '../../hooks/useBottomSheet';
import useSelectCardCompany from '../../hooks/useSelectCardType';

const AddCardPage = () => {
  const navigate = useNavigate();
  const {
    cardCompany,
    status: cardCompanyStatus,
    changeCardCompany,
  } = useSelectCardCompany(isSelectCardType);
  const cardFirstNumber = useInput(isValidCardNumber);
  const cardSecondNumber = useInput(isValidCardNumber);
  const cardThirdNumber = useInput(isValidCardNumber);
  const cardFourthNumber = useInput(isValidCardNumber);
  const cardPassword1 = useInput(isValidPassword);
  const cardPassword2 = useInput(isValidPassword);
  const expireMonth = useInput(isValidExpiredMonthFormat);
  const expireYear = useInput(isValidExpiredYearFormat);
  const securityCode = useInput(isValidSecurityCode);
  const cardOwner = useInput(isValidOwnerName);
  const { isOpen, toggleOpen } = useBottomSheet(true);

  const onBackButtonClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <>
      <div className="add-card-page">
        <Header>
          <button className="back-button" onClick={onBackButtonClick} aria-label="back-button">
            <img src={BackButtonImg} alt="뒤로 가기" />
          </button>
          <h2>카드 추가</h2>
        </Header>
        <article className="add-card-page-body">
          <Card
            cardCompany={cardCompany}
            cardFirstNumber={cardFirstNumber.value}
            cardSecondNumber={cardSecondNumber.value}
            cardThirdNumber={cardThirdNumber.value}
            cardFourthNumber={cardFourthNumber.value}
            cardOwner={cardOwner.value}
            expireMonth={expireMonth.value}
            expireYear={expireYear.value}
            onClick={toggleOpen}
          />
          <AddCardForm
            cardCompany={cardCompany}
            cardCompanyStatus={cardCompanyStatus}
            cardFirstNumber={cardFirstNumber}
            cardSecondNumber={cardSecondNumber}
            cardThirdNumber={cardThirdNumber}
            cardFourthNumber={cardFourthNumber}
            expireMonth={expireMonth}
            expireYear={expireYear}
            cardOwner={cardOwner}
            securityCode={securityCode}
            cardPassword1={cardPassword1}
            cardPassword2={cardPassword2}
          />
        </article>
      </div>
      <CardNameBottomSheet
        isOpen={isOpen}
        onToggleOpen={toggleOpen}
        setCardType={changeCardCompany}
      />
    </>
  );
};

export default AddCardPage;
