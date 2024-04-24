import { useState } from 'react';

import CardPreview from '../../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumberInput from '../../components/CardForm/CardNumberInput/CardNumberInput';
import CardCompanyInput from '../../components/CardForm/CardCompanyInput/CardCompanyInput';
import CardCVCInput from '../../components/CardForm/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../../components/CardForm/CardPasswordInput/CardPasswordInput';
import useValidatedInput from '../../hooks/useValidatedInput';
import useValidatedCardNumbers from '../../hooks/useValidatedCardNumbers';

import { validateMonth, validateYear, validateOwner, validateCVC, validatePassword } from '../../domain/Card';

import * as S from './CardRegistrationPage.style';

const CardRegistrationPage = () => {
  const [isCVCInput, setIsCVCInput] = useState(false);
  // const [inputComponentIndex, setInputComponentIndex] = useState(5);

  const { cardNumbers, isCardNumbersValid, handleCardNumbers } = useValidatedCardNumbers();
  const { value: company, handleValue: handleCompany } = useValidatedInput({ defaultValue: '' });
  const {
    value: month,
    isValid: isMonthValid,
    handleValue: handleMonth,
  } = useValidatedInput({ defaultValue: '', validateFunction: validateMonth });
  const {
    value: year,
    isValid: isYearValid,
    handleValue: handleYear,
  } = useValidatedInput({ defaultValue: '', validateFunction: validateYear });
  const {
    value: owner,
    isValid: isOwnerValid,
    handleValue: handleOwner,
  } = useValidatedInput({ defaultValue: '', validateFunction: validateOwner });
  const {
    value: cvc,
    isValid: isCVCValid,
    handleValue: handleCVC,
  } = useValidatedInput({ defaultValue: '', validateFunction: validateCVC });
  const {
    value: password,
    isValid: isPasswordValid,
    handleValue: handlePassword,
  } = useValidatedInput({ defaultValue: '', validateFunction: validatePassword });

  const handleIsCVCInput = (isCVCInput: boolean) => {
    setIsCVCInput(isCVCInput);
  };

  // const handleInputComponentIndex = (nextIndex: number) =>
  //   nextIndex < inputComponentIndex && setInputComponentIndex(nextIndex);

  // const inputComponentList = [
  //   <CardPasswordInput password={password} handlePassword={handlePassword} />,
  //   <CardCVCInput cvc={cvc} handleCVC={handleCVC} handleIsCVCInput={handleIsCVCInput} />,
  //   <CardOwnerInput owner={owner} isValid={isOwnerValid} handleOwner={handleOwner} />,
  //   <CardExpirationInput
  //     month={month}
  //     year={year}
  //     isValid={[isMonthValid, isYearValid]}
  //     handleMonth={handleMonth}
  //     handleYear={handleYear}
  //   />,
  //   <CardCompanyInput company={company} handleCompany={handleCompany} />,
  //   <CardNumberInput cardNumbers={cardNumbers} handleCardNumbers={handleCardNumbers} />,
  // ];

  // const makeInputComponentList = (inputComponentIndex: number) => {
  //   return inputComponentList
  //     .filter((_, index) => index >= inputComponentIndex)
  //     .map((inputComponent, index) => React.cloneElement(inputComponent, { key: index }));
  // };

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
      <S.CardForm>
        <CardPasswordInput password={password} isValid={isPasswordValid} handlePassword={handlePassword} />
        <CardCVCInput cvc={cvc} isValid={isCVCValid} handleCVC={handleCVC} handleIsCVCInput={handleIsCVCInput} />
        <CardOwnerInput owner={owner} isValid={isOwnerValid} handleOwner={handleOwner} />
        <CardExpirationInput
          month={month}
          year={year}
          isValid={[isMonthValid, isYearValid]}
          handleMonth={handleMonth}
          handleYear={handleYear}
        />
        <CardCompanyInput company={company} handleCompany={handleCompany} />
        <CardNumberInput cardNumbers={cardNumbers} isValid={isCardNumbersValid} handleCardNumbers={handleCardNumbers} />
      </S.CardForm>
    </S.CardRegistrationPageLayout>
  );
};

export default CardRegistrationPage;
