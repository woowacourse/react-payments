import { useState } from 'react';

import CardPreview from '../../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumberInput from '../../components/CardForm/CardNumberInput/CardNumberInput';
import CardCompanyInput from '../../components/CardForm/CardCompanyInput/CardCompanyInput';
import CardCVCInput from '../../components/CardForm/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../../components/CardForm/CardPasswordInput/CardPasswordInput';

import * as S from './CardRegistrationPage.style';

const CardRegistrationPage = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [owner, setOwner] = useState('');
  const [company, setCompany] = useState('');
  const [cvc, setCVC] = useState('');
  const [password, setPassword] = useState('');

  const handleCardNumbers = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);
  };

  const handleMonth = (month: string) => {
    setMonth(month);
  };

  const handleYear = (year: string) => {
    setYear(year);
  };

  const handleOwner = (owner: string) => {
    setOwner(owner);
  };

  const handleCompany = (company: string) => {
    setCompany(company);
  };

  const handleCVC = (cvc: string) => {
    setCVC(cvc);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  return (
    <S.CardRegistrationPageLayout>
      <S.CardPreviewBoxWrapper>
        <CardPreview cardNumber={cardNumbers} month={month} year={year} owner={owner} company={company} />
      </S.CardPreviewBoxWrapper>
      <S.CardForm>
        <CardNumberInput cardNumbers={cardNumbers} handleCardNumbers={handleCardNumbers} />
        <CardExpirationInput handleMonth={handleMonth} handleYear={handleYear} />
        <CardOwnerInput handleOwner={handleOwner} />
        <CardCompanyInput company={company} handleCompany={handleCompany} />
        <CardCVCInput handleCVC={handleCVC} />
        <CardPasswordInput />
      </S.CardForm>
    </S.CardRegistrationPageLayout>
  );
};

export default CardRegistrationPage;
