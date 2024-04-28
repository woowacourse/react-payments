import { useState } from 'react';
import { Link } from 'react-router-dom';

import CardPreview from '../../components/CardForm/CardPreview/CardPreview';
import CardOwnerInput from '../../components/CardForm/CardOwnerInput/CardOwnerInput';
import CardExpirationInput from '../../components/CardForm/CardExpirationInput/CardExpirationInput';
import CardNumbersInput from '../../components/CardForm/CardNumbersInput/CardNumbersInput';
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
import type { CardCompany } from '../../domain/Card.type';
import { isAllValid } from '../../utils/validation';
import { ROUTES } from '../../constants/Routes';

import * as S from './CardRegistrationPage.style';

const CardRegistrationPage = () => {
  const [isCVCInput, setIsCVCInput] = useState(false);

  const month = useInput<string>(validateMonth, '');
  const year = useInput<string>(validateYear, '');
  const owner = useInput<string>(validateOwner, '');
  const cvc = useInput<string>(validateCVC, '');
  const company = useInput<string>(validateCompany, '');
  const password = useInput<string>(validatePassword, '');
  const cardNumbers = useInputs<string>(validateCardNumber, ['', '', '', '']);

  const validationList = [
    isAllValid(cardNumbers.isValidList),
    company.isValid,
    isAllValid([month.isValid, year.isValid]),
    owner.isValid,
    cvc.isValid,
    password.isValid,
  ];

  const { moveIndex } = useAutoMoveIndex(0, validationList);

  const handleIsCVCInput = (isCVCInput: boolean) => setIsCVCInput(isCVCInput);

  const renderCardForm = (moveIndex: number) => {
    return (
      <S.CardForm>
        {moveIndex >= 5 && <CardPasswordInput password={password} />}
        {moveIndex >= 4 && <CardCVCInput cvc={cvc} handleIsCVCInput={handleIsCVCInput} />}
        {moveIndex >= 3 && <CardOwnerInput owner={owner} />}
        {moveIndex >= 2 && <CardExpirationInput month={month} year={year} />}
        {moveIndex >= 1 && <CardCompanyInput company={company} />}
        <CardNumbersInput cardNumbers={cardNumbers} />
      </S.CardForm>
    );
  };

  const renderSubmitButton = () => {
    const submitUrl = `${ROUTES.COMPLETE}?number=${encodeURIComponent(cardNumbers.values[0])}&company=${encodeURIComponent(company.value)}`;

    return (
      <Link to={submitUrl}>
        <S.SubmitButton type="button">확인</S.SubmitButton>
      </Link>
    );
  };

  return (
    <div>
      <S.CardRegistrationContainer>
        <S.CardPreviewBoxWrapper>
          <CardPreview
            cardNumber={cardNumbers.values}
            month={month.value}
            year={year.value}
            owner={owner.value}
            company={company.value as CardCompany}
            cvc={cvc.value}
            isCVCInput={isCVCInput}
          />
        </S.CardPreviewBoxWrapper>
        {renderCardForm(moveIndex)}
      </S.CardRegistrationContainer>
      {validationList.every(Boolean) && renderSubmitButton()}
    </div>
  );
};

export default CardRegistrationPage;
