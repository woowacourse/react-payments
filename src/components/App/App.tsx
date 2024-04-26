import { useEffect, useState } from 'react';

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

import '../../styles/reset.css';
import '../../styles/common.css';
import * as S from './App.style';

enum CardInputStep {
  CardNumbers,
  Brand,
  ExpireDate,
  Owner,
  CVC,
  PIN,
}

export default function App() {
  const { cardNumbers, cardNumbersValid, handleChangeCardNumbers } = useChangeCardNumbers();
  const { brand, brandValid, handleChangeBrand } = useChangeBrand();
  const { expireDate, expireMonthValid, expireYearValid, handleChangeDate } = useChangeExpireDate();
  const { owner, ownerValid, handleChangeOwner } = useChangeOwner();
  const { CVC, CVCValid, handleChangeCVC } = useChangeCVC();
  const { PINValid, handleChangePIN } = useChangePIN();

  const [currentInputStep, setCurrentInputStep] = useState(CardInputStep.CardNumbers);
  const [showCardBackside, setShowCardBackside] = useState(false);
  const [allInputsCompleted, setAllInputsCompleted] = useState(false);

  const handleShowCardBackside = (isCVCFocus: boolean) => {
    setShowCardBackside(isCVCFocus);
  };

  useEffect(() => {
    const inputValidationResults = {
      [CardInputStep.CardNumbers]: cardNumbersValid.isCompleted,
      [CardInputStep.Brand]: brandValid.isCompleted,
      [CardInputStep.ExpireDate]: expireMonthValid.isCompleted && expireYearValid.isCompleted,
      [CardInputStep.Owner]: ownerValid.isCompleted,
      [CardInputStep.CVC]: CVCValid.isCompleted,
      [CardInputStep.PIN]: PINValid.isCompleted,
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

      <S.CardForm>
        {currentInputStep >= CardInputStep.PIN && <CardPINInput isPINValid={PINValid} onChangePIN={handleChangePIN} />}

        {currentInputStep >= CardInputStep.CVC && (
          <CardCVCInput isCVCValid={CVCValid} onChangeCVC={handleChangeCVC} onChangeFocusCVC={handleShowCardBackside} />
        )}

        {currentInputStep >= CardInputStep.Owner && (
          <CardOwnerInput isOwnerValid={ownerValid} onChangeOwner={handleChangeOwner} />
        )}

        {currentInputStep >= CardInputStep.ExpireDate && (
          <CardExpirationInput
            isMonthValid={expireMonthValid}
            isYearValid={expireYearValid}
            onChangeExpireDate={handleChangeDate}
          />
        )}

        {currentInputStep >= CardInputStep.Brand && (
          <CardBrandInput isBrandValid={brandValid} onChangeBrand={handleChangeBrand} />
        )}

        {currentInputStep >= CardInputStep.CardNumbers && (
          <CardNumberInput isCardNumbersValid={cardNumbersValid} onChangeCardNumbers={handleChangeCardNumbers} />
        )}

        {allInputsCompleted && <S.CardFormSubmitButton type="submit">확인</S.CardFormSubmitButton>}
      </S.CardForm>
    </S.AppLayout>
  );
}
