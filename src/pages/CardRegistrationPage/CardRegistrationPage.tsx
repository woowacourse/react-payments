import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CardPreview from '../../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumberInput from '../../components/CardForm/CardNumberInput/CardNumberInput';
import CardCompanyInput from '../../components/CardForm/CardCompanyInput/CardCompanyInput';
import CardCVCInput from '../../components/CardForm/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../../components/CardForm/CardPasswordInput/CardPasswordInput';

import useValidatedInput from '../../hooks/useValidatedInput';
import useValidatedCardNumbers from '../../hooks/useValidatedCardNumbers';
import useMoveNextInput from '../../hooks/useMoveNextInput';

import { isAllValid } from '../../utils/validation';
import {
  validateCompany,
  validateMonth,
  validateYear,
  validateOwner,
  validateCVC,
  validatePassword,
} from '../../domain/Card';

import * as S from './CardRegistrationPage.style';

const CardRegistrationPage = () => {
  const [isCVCInput, setIsCVCInput] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleIsCVCInput = (isCVCInput: boolean) => setIsCVCInput(isCVCInput);

  const { cardNumbers, isCardNumbersValid, handleCardNumbers } = useValidatedCardNumbers();
  const { value: month, isValid: isMonthValid, handleValue: handleMonth } = useValidatedInput(validateMonth);
  const { value: year, isValid: isYearValid, handleValue: handleYear } = useValidatedInput(validateYear);
  const { value: owner, isValid: isOwnerValid, handleValue: handleOwner } = useValidatedInput(validateOwner);
  const { value: cvc, isValid: isCVCValid, handleValue: handleCVC } = useValidatedInput(validateCVC);
  const { value: company, isValid: isCompanyValid, handleValue: handleCompany } = useValidatedInput(validateCompany);
  const {
    value: password,
    isValid: isPasswordValid,
    handleValue: handlePassword,
  } = useValidatedInput(validatePassword);

  const validationList = [
    isAllValid(isCardNumbersValid),
    isCompanyValid,
    isAllValid([isMonthValid, isYearValid]),
    isOwnerValid,
    isCVCValid,
    isPasswordValid,
  ];

  useEffect(() => {
    if (!isPasswordValid) return;

    const validationList = [
      isAllValid(isCardNumbersValid),
      isCompanyValid,
      isAllValid([isMonthValid, isYearValid]),
      isOwnerValid,
      isCVCValid,
      isPasswordValid,
    ];

    validationList.every(Boolean) ? setIsButtonActive(true) : setIsButtonActive(false);
  }, [isCardNumbersValid, isCompanyValid, isMonthValid, isYearValid, isOwnerValid, isCVCValid, isPasswordValid]);

  const { inputComponentIndex } = useMoveNextInput(5, validationList);

  const inputComponentList = [
    <CardPasswordInput password={password} isValid={isPasswordValid} handlePassword={handlePassword} />,
    <CardCVCInput cvc={cvc} isValid={isCVCValid} handleCVC={handleCVC} handleIsCVCInput={handleIsCVCInput} />,
    <CardOwnerInput owner={owner} isValid={isOwnerValid} handleOwner={handleOwner} />,
    <CardExpirationInput
      month={month}
      year={year}
      isValid={[isMonthValid, isYearValid]}
      handleMonth={handleMonth}
      handleYear={handleYear}
    />,
    <CardCompanyInput company={company} handleCompany={handleCompany} />,
    <CardNumberInput cardNumbers={cardNumbers} isValid={isCardNumbersValid} handleCardNumbers={handleCardNumbers} />,
  ];

  const makeInputComponentList = (inputComponentIndex: number) => {
    return inputComponentList
      .filter((_, index) => index >= inputComponentIndex)
      .map((inputComponent, index) => React.cloneElement(inputComponent, { key: index }));
  };

  return (
    <div>
      <S.CardRegistrationContainer>
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
      </S.CardRegistrationContainer>
      {isButtonActive && (
        <Link to={`/complete?number=${encodeURIComponent(cardNumbers[0])}&company=${encodeURIComponent(company)}`}>
          <S.SubmitButton>확인</S.SubmitButton>
        </Link>
      )}
    </div>
  );
};

export default CardRegistrationPage;
