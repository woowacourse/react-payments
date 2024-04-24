import React, { useState } from 'react';

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

  const [isCVCInput, setIsCVCInput] = useState(false);
  const [inputComponentIndex, setInputComponentIndex] = useState(5);

  const handleCardNumbers = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);
    handleInputComponentIndex(4);
  };

  const handleCompany = (company: string) => {
    setCompany(company);
    handleInputComponentIndex(3);
  };

  const handleMonth = (month: string) => {
    setMonth(month);
  };

  const handleYear = (year: string) => {
    setYear(year);
    handleInputComponentIndex(2);
  };

  const handleOwner = (owner: string) => {
    setOwner(owner);
    handleInputComponentIndex(1);
  };

  const handleCVC = (cvc: string) => {
    setCVC(cvc);
    handleInputComponentIndex(0);
  };

  const handlePassword = (password: string) => {
    setPassword(password);
  };

  const handleIsCVCInput = (isCVCInput: boolean) => {
    setIsCVCInput(isCVCInput);
  };

  const handleInputComponentIndex = (nextIndex: number) =>
    nextIndex < inputComponentIndex && setInputComponentIndex(nextIndex);

  const inputComponentList = [
    <CardPasswordInput password={password} handlePassword={handlePassword} />,
    <CardCVCInput cvc={cvc} handleCVC={handleCVC} handleIsCVCInput={handleIsCVCInput} />,
    <CardOwnerInput owner={owner} handleOwner={handleOwner} />,
    <CardExpirationInput month={month} year={year} handleMonth={handleMonth} handleYear={handleYear} />,
    <CardCompanyInput company={company} handleCompany={handleCompany} />,
    <CardNumberInput cardNumbers={cardNumbers} handleCardNumbers={handleCardNumbers} />,
  ];

  const makeInputComponentList = (inputComponentIndex: number) => {
    return inputComponentList
      .filter((_, index) => index >= inputComponentIndex)
      .map((inputComponent, index) => React.cloneElement(inputComponent, { key: index }));
  };

  return (
    <S.CardRegistrationPageLayout>
      <S.CardPreviewBoxWrapper>
        <CardPreview
          cardNumber={cardNumbers}
          month={month}
          year={year}
          owner={owner}
          company={company}
          cvc={cvc}
          isCVCInput={isCVCInput}
        />
      </S.CardPreviewBoxWrapper>
      <S.CardForm>{makeInputComponentList(inputComponentIndex)}</S.CardForm>
    </S.CardRegistrationPageLayout>
  );
};

export default CardRegistrationPage;
