import { FormEvent, useEffect, useState } from 'react';
import { CARD_BRAND } from '../../../constants/addCardForm';
import { CARD_NUMBER_DIGITS, CARD_NUMBER_SEPARATOR } from '../../../constants/creditCard';
import { ALERT } from '../../../constants/messages';
import { CardBrand, ExpDate } from '../../../types';
import Button from '../../shared/Button';
import CardBrandModal from '../modal/CardBrandModal';
import NicknameModal from '../modal/NicknameModal';
import CardNumberInput from './AddCardInput/CardNumberInput';
import CVCInput from './AddCardInput/CVCInput';
import ExpDateInput from './AddCardInput/ExpDateInput';
import OwnerNameInput from './AddCardInput/OwnerNameInput/index ';
import PasswordInput from './AddCardInput/PasswordInput';
import { AddCardFormCreditCard } from './styles';
import { isAllInputFilled } from './validator';

export type CardNumberState = [string, string, string, string];
export type PasswordState = [string, string];

const AddCardForm = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand>({ name: '', color: '' });
  const [cardNumber, setCardNumber] = useState<CardNumberState>(['', '', '', '']);
  const [expDate, setExpDate] = useState<ExpDate>({ year: '', month: '' });
  const [password, setPassword] = useState<PasswordState>(['', '']);
  const [ownerName, setOwnerName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [CVC, setCVC] = useState<string>('');
  const [isCardBrandModalVisible, setIsCardBrandModalVisible] = useState<boolean>(false);
  const [isNicknameModalVisible, setIsNicknameModalVisible] = useState<boolean>(false);

  const onSelectCardBrand = (cardBrand: CardBrand) => {
    setCardBrand(cardBrand);
    setIsCardBrandModalVisible(false);
  };

  const onSetCardBrand = () => {
    if (cardNumber[0].length !== CARD_NUMBER_DIGITS || cardNumber[1].length !== CARD_NUMBER_DIGITS) {
      setCardBrand({ name: '', color: '' });
      return;
    }

    const cardBrand = CARD_BRAND[Number(cardNumber[1][3])];

    if (!cardBrand) {
      setIsCardBrandModalVisible(true);
      return;
    }

    setCardBrand(cardBrand);
  };

  useEffect(() => {
    onSetCardBrand();
  }, [cardNumber[0], cardNumber[1]]);

  const onClickNextButton = () => {
    if (
      cardNumber[0].length === CARD_NUMBER_DIGITS &&
      cardNumber[1].length === CARD_NUMBER_DIGITS &&
      cardBrand.name === ''
    ) {
      onSetCardBrand();
      return;
    }

    if (!isAllInputFilled({ cardNumber, cardBrand, CVC, expDate, ownerName, password })) {
      alert(ALERT.SHOULD_FILL_REQUIRED_INPUTS);
      return;
    }

    setIsNicknameModalVisible(true);
  };

  const onSubmitCard = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(ALERT.CARD_SUBMIT_SUCCESS);
  };

  return (
    <div>
      <AddCardFormCreditCard
        cardBrand={cardBrand}
        expDate={expDate}
        ownerName={ownerName}
        cardNumber={cardNumber.join(CARD_NUMBER_SEPARATOR)}
      />

      <form onSubmit={onSubmitCard}>
        <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
        <ExpDateInput expDate={expDate} setExpDate={setExpDate} />
        <OwnerNameInput ownerName={ownerName} setOwnerName={setOwnerName} />
        <CVCInput CVC={CVC} setCVC={setCVC} />
        <PasswordInput password={password} setPassword={setPassword} />

        <Button type="button" position="bottom-right" onClick={onClickNextButton}>
          다음
        </Button>

        {isCardBrandModalVisible && (
          <CardBrandModal
            cardBrands={CARD_BRAND}
            onSelect={onSelectCardBrand}
            onClose={() => setIsCardBrandModalVisible(false)}
          />
        )}

        {isNicknameModalVisible && (
          <NicknameModal
            nickname={nickname}
            setNickname={setNickname}
            ownerName={ownerName}
            cardNumber={cardNumber.join(CARD_NUMBER_SEPARATOR)}
            expDate={expDate}
            cardBrand={cardBrand}
          />
        )}
      </form>
    </div>
  );
};

export default AddCardForm;
