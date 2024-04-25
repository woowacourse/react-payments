import { useState } from 'react';
import { Link } from 'react-router-dom';

import CardPreview from '../../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumberInput from '../../components/CardForm/CardNumberInput/CardNumberInput';
import CardCompanyInput from '../../components/CardForm/CardCompanyInput/CardCompanyInput';
import CardCVCInput from '../../components/CardForm/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../../components/CardForm/CardPasswordInput/CardPasswordInput';

import useValidatedInput from '../../hooks/useValidatedInput';
import useValidatedInputs from '../../hooks/useValidatedInputs';
import useAutoMoveIndex from '../../hooks/useAutoMoveIndex';

import {
  validateCompany,
  validateMonth,
  validateYear,
  validateOwner,
  validateCVC,
  validatePassword,
  validateCardNumber,
} from '../../domain/Card';
import { isAllValid } from '../../utils/validation';

import * as S from './CardRegistrationPage.style';

const CardRegistrationPage = () => {
  const [isCVCInput, setIsCVCInput] = useState(false);

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
  const {
    values: cardNumbers,
    isValid: isCardNumbersValid,
    handleValues: handleCardNumbers,
  } = useValidatedInputs(validateCardNumber, ['', '', '', '']);

  const validationList = [
    isAllValid(isCardNumbersValid),
    isCompanyValid,
    isAllValid([isMonthValid, isYearValid]),
    isOwnerValid,
    isCVCValid,
    isPasswordValid,
  ];

  const { moveIndex } = useAutoMoveIndex(0, validationList);

  const isButtonActive = validationList.every(Boolean);

  const handleIsCVCInput = (isCVCInput: boolean) => setIsCVCInput(isCVCInput);

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
        <S.CardForm>
          {moveIndex >= 5 && (
            <CardPasswordInput password={password} isValid={isPasswordValid} handlePassword={handlePassword} />
          )}
          {moveIndex >= 4 && (
            <CardCVCInput cvc={cvc} isValid={isCVCValid} handleCVC={handleCVC} handleIsCVCInput={handleIsCVCInput} />
          )}
          {moveIndex >= 3 && <CardOwnerInput owner={owner} isValid={isOwnerValid} handleOwner={handleOwner} />}
          {moveIndex >= 2 && (
            <CardExpirationInput
              month={month}
              year={year}
              isValid={[isMonthValid, isYearValid]}
              handleMonth={handleMonth}
              handleYear={handleYear}
            />
          )}
          {moveIndex >= 1 && <CardCompanyInput company={company} handleCompany={handleCompany} />}
          <CardNumberInput
            cardNumbers={cardNumbers}
            isValid={isCardNumbersValid}
            handleCardNumbers={handleCardNumbers}
          />
        </S.CardForm>
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
