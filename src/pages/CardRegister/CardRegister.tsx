import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/pages/CardList/CardContent/CardContent';
import CardCVCInput from '../../components/pages/CardRegister/CardCVCInput/CardCVCInput';
import CardExpirationDateInput from '../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput';
import CardNameInput from '../../components/pages/CardRegister/CardNameInput/CardNameInput';
import CardNumberInput from '../../components/pages/CardRegister/CardNumberInput/CardNumberInput';
import CardPasswordInput from '../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import * as Styled from './CardRegister.styles';
import { getItemFromLocalStorage, setItemInLocalStorage } from '../../utils/localStorage';
import { useBottomSheet } from '../../context/BottomSheetContext';
import BankListBottomSheetContent from '../../components/pages/CardRegister/BankListBottomSheetContent/BankListBottomSheetContent';
import BottomSheet from '../../components/@common/BottomSheet/BottomSheet';
import { BankNames, CardRegisterInfo } from '../../types/card.type';

export default function CardRegister() {
  const navigate = useNavigate();
  const { cardRegisterInfo, initCardRegisterInfo, handleCardInfo } = useCardRegisterContext();

  const { isOpened, content, openBottomSheet, closeBottomSheet } = useBottomSheet();
  const [bankName, setBankName] = useState<BankNames>('현대카드');
  const [allValid, setAllValid] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cardRegisterInfo !== null) {
      const cardList = getItemFromLocalStorage<CardRegisterInfo[]>('CardList');
      const newCardList = cardList !== null ? [cardRegisterInfo, ...cardList] : [cardRegisterInfo];
      setItemInLocalStorage('CardList', newCardList);
      initCardRegisterInfo();
    }

    navigate('/', { state: { isReadyForRegister: true } });
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter((e) => e.tagName === 'INPUT') as HTMLInputElement[];

    const activeInput = e.target as HTMLInputElement;
    const activeIndex = inputs.indexOf(activeInput);

    const isNameInput = activeInput.name === 'name';
    const isMaxLength = activeInput.value.length === activeInput.maxLength;
    const isEmpty = activeInput.value === '';

    if (isNameInput || !isNameInput) {
      if (isMaxLength) {
        inputs[activeIndex + 1]?.focus();
      } else if (isEmpty) {
        inputs[activeIndex - 1]?.focus();
      }
    }

    const hasInvalidInput = inputs.some((input) => !input.validity.valid);
    setAllValid(!hasInvalidInput);
  };

  const onChangeBank = (newBank: BankNames) => {
    setBankName(newBank);
    handleCardInfo('bankName', newBank);
  };

  useEffect(() => {
    openBottomSheet(<BankListBottomSheetContent onChange={onChangeBank} onSelect={closeBottomSheet} />);
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
        <Styled.RegisterForm onSubmit={handleSubmit} onChange={handleChange}>
          <CardNumberInput />
          <CardExpirationDateInput />
          <CardNameInput />
          <CardCVCInput />
          <CardPasswordInput />
          {allValid && <Styled.CompleteButton>다음</Styled.CompleteButton>}
        </Styled.RegisterForm>
      </Styled.InfoSection>
      <BottomSheet isOpened={isOpened} onClose={closeBottomSheet}>
        {content}
      </BottomSheet>
    </Styled.Root>
  );
}
