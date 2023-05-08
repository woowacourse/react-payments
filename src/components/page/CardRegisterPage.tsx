import { useLayoutEffect, useState } from 'react';
import Card from '../common/Card';
import CardNumberInput from '../box/inputSection/CardNumberInput';
import ExpireDateInput from '../box/inputSection/ExpireDateInput';
import OwnerNameInput from '../box/inputSection/OwnerNameInput';
import SecurityCodeInput from '../box/inputSection/SecurityCodeInput';
import CardPasswordInput from '../box/inputSection/CardPasswordInput';
import styled from 'styled-components';
import { Bank, CardType, Page, PageProps } from '../../abstracts/types';
import PageTemplate from '../template/PageTemplate';
import BankSelectBottomSheet from '../box/BankSelectBottomSheet';
import { BottomSheetProvider } from 'ksone02-modal';
import useValidation from '../../hooks/useValidation';

interface CardFormState extends Omit<CardType, 'id' | 'cardPassword'> {
  cardPassword1: string;
  cardPassword2: string;
}

const CardRegisterPage = ({ navigate }: PageProps) => {
  const [isOnBankModal, setIsOnBankModal] = useState<boolean>(false);

  const [card, setCard] = useState<CardFormState>({
    cardNumber: ['', '', '', ''],
    expireDate: ['', ''],
    ownerName: '',
    securityCode: '',
    cardPassword1: '',
    cardPassword2: '',
    bank: undefined,
  });

  const submitNewCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCard: CardType = {
      id: Date.now(),
      cardNumber,
      expireDate,
      ownerName,
      securityCode,
      cardPassword: cardPassword1 + cardPassword2,
      bank,
    };

    navigate(Page.aliasSet, newCard);
  };

  const onClickBack = () => {
    navigate(Page.list);
  };

  const onChange = (key: keyof CardFormState) => (value: string | string[] | Bank) => {
    setCard((prev) => ({ ...prev, [key]: value }));
  };

  useLayoutEffect(() => {
    setIsOnBankModal(true);
  }, []);

  const { cardNumber, expireDate, ownerName, securityCode, cardPassword1, cardPassword2, bank } = card;

  const { errorMessage: cardNumberErrorMessage } = useValidation(cardNumber, 'cardNumber');
  const { errorMessage: expireDateErrorMessage } = useValidation(expireDate, 'expireDate');
  const { errorMessage: securityErrorMessage } = useValidation(securityCode, 'cvc');

  return (
    <PageTemplate title="카드 추가" onClickBack={onClickBack}>
      <Card
        cardNumber={cardNumber}
        ownerName={ownerName}
        expireDate={expireDate}
        bank={bank}
        onClick={() => setIsOnBankModal(true)}
      />

      <InputForm onSubmit={submitNewCard}>
        <CardNumberInput
          inputArrayValue={cardNumber}
          setInputArrayValue={onChange('cardNumber')}
          errorMessage={cardNumberErrorMessage}
        />
        <ExpireDateInput
          inputArrayValue={expireDate}
          setInputArrayValue={onChange('expireDate')}
          errorMessage={expireDateErrorMessage}
        />
        <OwnerNameInput inputValue={ownerName} setInputValue={onChange('ownerName')} />
        <SecurityCodeInput
          inputValue={securityCode}
          setInputValue={onChange('securityCode')}
          errorMessage={securityErrorMessage}
        />
        <CardPasswordInput
          cardPassword1Props={{
            inputValue: cardPassword1,
            setInputValue: onChange('cardPassword1'),
          }}
          cardPassword2Props={{
            inputValue: cardPassword2,
            setInputValue: onChange('cardPassword2'),
          }}
        />
        {!cardNumberErrorMessage &&
          cardNumber.join('').length > 0 &&
          !expireDateErrorMessage &&
          expireDate.join('').length > 0 &&
          !securityErrorMessage &&
          securityCode &&
          cardPassword1 &&
          cardPassword2 && (
            <ButtonWrapper>
              <SubmitButton type="submit">다음</SubmitButton>
            </ButtonWrapper>
          )}
      </InputForm>
      {isOnBankModal && (
        <BottomSheetProvider onClose={() => setIsOnBankModal(false)} modalState={isOnBankModal}>
          <BankSelectBottomSheet
            onClose={() => setIsOnBankModal(false)}
            modalState={isOnBankModal}
            bank={bank}
            setBank={(newBank: Bank) => onChange('bank')(newBank)}
          />
        </BottomSheetProvider>
      )}
    </PageTemplate>
  );
};

export default CardRegisterPage;

const InputForm = styled.form`
  width: 100%;

  margin-top: 28px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #000000;
  background-color: transparent;
  border: none;
  height: 34px;

  cursor: pointer;
`;
