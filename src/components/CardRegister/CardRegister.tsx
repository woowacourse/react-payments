import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CardNumberInput from '../CardNumberInput/CardNumberInput';
import CardBrandInput from '../CardBrandInput/CardBrandInput';
import CardExpirationInput from '../CardExpirationInput/CardExpirationInput';
import CardOwnerInput from '../CardOwnerInput/CardOwnerInput';
import CardCVCInput from '../CardCVCInput/CardCVCInput';
import CardPINInput from '../CardPINInput/CardPINInput';
import CardPreviewBox from '../CardPreview/CardPreview';

import {
  useChangeCardNumbers,
  useChangeBrand,
  useChangeExpireDate,
  useChangeOwner,
  useChangeCVC,
  useChangePIN,
} from '../../hooks';

import ENDPOINTS from '../../constants/endpoints';

import '../../styles/reset.css';
import '../../styles/common.css';
import * as S from './CardRegister.style';

enum CARD_INPUT_STEP {
  CardNumbers,
  Brand,
  ExpireDate,
  Owner,
  CVC,
  PIN,
}

export default function CardRegister() {
  const { cardNumbers, cardNumbersValid, handleChangeCardNumbers } = useChangeCardNumbers();
  const { brand, brandValid, handleChangeBrand } = useChangeBrand();
  const { expireDate, expireMonthValid, expireYearValid, handleChangeDate } = useChangeExpireDate();
  const { owner, ownerValid, handleChangeOwner, handleSubmitOwner } = useChangeOwner();
  const { CVC, CVCValid, handleChangeCVC } = useChangeCVC();
  const { PINValid, handleChangePIN } = useChangePIN();

  const [currentInputStep, setCurrentInputStep] = useState(CARD_INPUT_STEP.CardNumbers);
  const [showCardBackside, setShowCardBackside] = useState(false);
  const [allInputsCompleted, setAllInputsCompleted] = useState(false);

  const navigate = useNavigate();

  const handleShowCardBackside = (isCVCFocus: boolean) => {
    setShowCardBackside(isCVCFocus);
  };

  const handleSubmitCardForm = () => {
    navigate(ENDPOINTS.cardRegisterComplete, {
      state: { firstFourCardNumberDigits: cardNumbers[0], brand },
    });
  };

  useEffect(() => {
    const inputValidationResults = {
      [CARD_INPUT_STEP.CardNumbers]: cardNumbersValid.isCompleted,
      [CARD_INPUT_STEP.Brand]: brandValid.isCompleted,
      [CARD_INPUT_STEP.ExpireDate]: expireMonthValid.isCompleted && expireYearValid.isCompleted,
      [CARD_INPUT_STEP.Owner]: ownerValid.isCompleted,
      [CARD_INPUT_STEP.CVC]: CVCValid.isCompleted,
      [CARD_INPUT_STEP.PIN]: PINValid.isCompleted,
    };

    const lastCompletedStep = Object.values(inputValidationResults).lastIndexOf(true);
    if (lastCompletedStep === currentInputStep) {
      setCurrentInputStep(lastCompletedStep + 1);
    }

    setAllInputsCompleted(Object.values(inputValidationResults).every((result) => result === true));
  }, [
    currentInputStep,
    cardNumbersValid.isCompleted,
    brandValid.isCompleted,
    expireMonthValid.isCompleted,
    expireYearValid.isCompleted,
    ownerValid.isCompleted,
    CVCValid.isCompleted,
    PINValid.isCompleted,
  ]);

  return (
    <S.AppLayout>
      <S.CardPreviewBox>
        <CardPreviewBox
          cardNumbers={cardNumbers}
          brand={brand}
          month={expireDate.month}
          year={expireDate.year}
          owner={owner}
          CVC={CVC}
          showCardBackside={showCardBackside}
        />
      </S.CardPreviewBox>

      <S.CardForm className="card-form">
        {currentInputStep >= CARD_INPUT_STEP.PIN && (
          <CardPINInput isPINValid={PINValid} onChangePIN={handleChangePIN} />
        )}

        {currentInputStep >= CARD_INPUT_STEP.CVC && (
          <CardCVCInput isCVCValid={CVCValid} onChangeCVC={handleChangeCVC} onChangeFocusCVC={handleShowCardBackside} />
        )}

        {currentInputStep >= CARD_INPUT_STEP.Owner && (
          <CardOwnerInput isOwnerValid={ownerValid} onChangeOwner={handleChangeOwner} onSubmitOwner={handleSubmitOwner} />
        )}

        {currentInputStep >= CARD_INPUT_STEP.ExpireDate && (
          <CardExpirationInput
            isMonthValid={expireMonthValid}
            isYearValid={expireYearValid}
            onChangeExpireDate={handleChangeDate}
          />
        )}

        {currentInputStep >= CARD_INPUT_STEP.Brand && (
          <CardBrandInput isBrandValid={brandValid} onChangeBrand={handleChangeBrand} />
        )}

        {currentInputStep >= CARD_INPUT_STEP.CardNumbers && (
          <CardNumberInput isCardNumbersValid={cardNumbersValid} onChangeCardNumbers={handleChangeCardNumbers} />
        )}

        {allInputsCompleted && <S.CardFormSubmitButton onClick={handleSubmitCardForm}>확인</S.CardFormSubmitButton>}
      </S.CardForm>
    </S.AppLayout>
  );
}
