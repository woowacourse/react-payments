import React, { FormEvent, FocusEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/pages/CardList/CardContent/CardContent';
import CardCVCInput from '../../components/pages/CardRegister/CardCVCInput/CardCVCInput';
import CardExpirationDateInput from '../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput';
import CardNameInput from '../../components/pages/CardRegister/CardNameInput/CardNameInput';
import CardNumberInput from '../../components/pages/CardRegister/CardNumberInput/CardNumberInput';
import CardPasswordInput from '../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import * as Styled from './CardRegisterPage.styles';
import { useBottomSheet } from 'react-bottom-sheet-booungi';
import BankListBottomSheetContent from '../../components/pages/CardRegister/BankListBottomSheetContent/BankListBottomSheetContent';
import { BankNames } from '../../types/card.type';

export type CardInputProps = {
  isValid: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const CardRegisterPage = () => {
  const navigate = useNavigate();
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();

  const { showBottomSheet, hideBottomSheet } = useBottomSheet();
  const [bankName, setBankName] = useState<BankNames | null>(null);
  const [allValid, setAllValid] = useState(false);
  const [validationStatus, setValidationStatus] = useState({
    cardNumber: true,
    expirationDate: true,
    holderName: true,
    cvc: true,
    password: true,
  });

  const handleBlur = (field: string, e: FocusEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const isValid = input.validity.valid;

    setValidationStatus({
      ...validationStatus,
      [field]: isValid,
    });
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((e) => e.tagName === 'INPUT') as HTMLInputElement[];

    const activeInput = e.target as HTMLInputElement;
    const activeIndex = inputs.indexOf(activeInput);

    const isNameInput = activeInput.name === 'name';
    const isMaxLength = activeInput.value.length === activeInput.maxLength;

    if (isNameInput || !isNameInput) {
      if (isMaxLength) {
        inputs[activeIndex + 1]?.focus();
      }
    }

    const hasInvalidInput = Object.values(validationStatus).some((status) => !status);
    setAllValid(!hasInvalidInput);
  };

  const handleSubmit = () => {
    if (!allValid) return;
    navigate('alias', { state: { from: 'registerCard' } });
  };

  const onChangeBank = (newBank: BankNames) => {
    setBankName(newBank);
    handleCardInfo('bankName', newBank);
  };

  const openBottomSheet = () => {
    showBottomSheet({ content: <BankListBottomSheetContent onChange={onChangeBank} onSelect={hideBottomSheet} />, overlay: true });
  };

  useEffect(() => {
    openBottomSheet();
  }, []);

  return (
    <Styled.Root>
      <Styled.CardSection>
        {cardRegisterInfo && (
          <Card
            cardNumber={cardRegisterInfo.cardNumber}
            expirationDate={cardRegisterInfo.expirationDate}
            holderName={cardRegisterInfo.holderName}
            cvc={cardRegisterInfo.cvc}
            password={cardRegisterInfo.password}
            bankName={bankName}
            onClick={openBottomSheet}
          />
        )}
      </Styled.CardSection>
      <Styled.CardBankChangeText>카드사를 변경하려면 카드를 클릭해주세요. 💳</Styled.CardBankChangeText>
      <Styled.InfoSection>
        <Styled.RegisterForm onChange={handleChange}>
          <CardNumberInput isValid={validationStatus.cardNumber} onBlur={(valid) => handleBlur('cardNumber', valid)} />
          <CardExpirationDateInput isValid={validationStatus.expirationDate} onBlur={(valid) => handleBlur('expirationDate', valid)} />
          <CardNameInput isValid={validationStatus.holderName} onBlur={(valid) => handleBlur('holderName', valid)} />
          <CardCVCInput isValid={validationStatus.cvc} onBlur={(valid) => handleBlur('cvc', valid)} />
          <CardPasswordInput isValid={validationStatus.password} onBlur={(valid) => handleBlur('password', valid)} />
          {<Styled.CompleteButton onClick={handleSubmit}>다음</Styled.CompleteButton>}
        </Styled.RegisterForm>
      </Styled.InfoSection>
    </Styled.Root>
  );
};

export default CardRegisterPage;
