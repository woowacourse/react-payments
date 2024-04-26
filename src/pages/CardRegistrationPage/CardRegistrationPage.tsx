import { useState } from 'react';
import { Link } from 'react-router-dom';

import CardPreview from '../../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumberInput from '../../components/CardForm/CardNumberInput/CardNumberInput';
import CardCompanyInput from '../../components/CardForm/CardCompanyInput/CardCompanyInput';
import CardCVCInput from '../../components/CardForm/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../../components/CardForm/CardPasswordInput/CardPasswordInput';

import useInput from '../../hooks/useInput';
import useInputs from '../../hooks/useInputs';
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

  const month = useInput(validateMonth);
  const year = useInput(validateYear);
  const owner = useInput(validateOwner);
  const cvc = useInput(validateCVC);
  const company = useInput(validateCompany);
  const password = useInput(validatePassword);
  const cardNumbers = useInputs(validateCardNumber, ['', '', '', '']);

  const validationList = [
    isAllValid(cardNumbers.isValid),
    company.isValid,
    isAllValid([month.isValid, year.isValid]),
    owner.isValid,
    cvc.isValid,
    password.isValid,
  ];

  const { moveIndex } = useAutoMoveIndex(0, validationList);

  const isButtonActive = validationList.every(Boolean);

  const handleIsCVCInput = (isCVCInput: boolean) => setIsCVCInput(isCVCInput);

  return (
    <div>
      <S.CardRegistrationContainer>
        <S.CardPreviewBoxWrapper>
          <CardPreview
            cardNumber={cardNumbers.values}
            month={month.value}
            year={year.value}
            owner={owner.value}
            company={company.value}
            cvc={cvc.value}
            isCVCInput={isCVCInput}
          />
        </S.CardPreviewBoxWrapper>
        <S.CardForm>
          {moveIndex >= 5 && <CardPasswordInput password={password} />}
          {moveIndex >= 4 && <CardCVCInput cvc={cvc} handleIsCVCInput={handleIsCVCInput} />}
          {moveIndex >= 3 && <CardOwnerInput owner={owner} />}
          {moveIndex >= 2 && <CardExpirationInput month={month} year={year} />}
          {moveIndex >= 1 && <CardCompanyInput company={company} />}
          <CardNumberInput cardNumbers={cardNumbers} />
        </S.CardForm>
      </S.CardRegistrationContainer>
      {isButtonActive && (
        <Link
          to={`/complete?number=${encodeURIComponent(cardNumbers.values[0])}&company=${encodeURIComponent(company.value)}`}
        >
          <S.SubmitButton>확인</S.SubmitButton>
        </Link>
      )}
    </div>
  );
};

export default CardRegistrationPage;
