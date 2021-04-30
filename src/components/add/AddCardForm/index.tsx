import { FormEvent, useEffect, useState, VFC } from 'react';
import CreditCard from '../../shared/CreditCard';
import CardBrandModal from '../CardBrandModal';
import NicknameModal from '../NicknameModal';
import Button from '../../shared/Button';
import CARD_BRAND from '../../../constants/cardData';
import { CARD_NUMBER_DIGITS, CARD_NUMBER_SEPARATOR } from '../../../constants/creditCard';
import { ALERT } from '../../../constants/messages';
import { AddCardFormContainer } from './styles';
import { CardBrand, ExpDate } from '../../../types';
import { isAllInputFilled } from './validator';
import CardNumberInputs from './CardNumberInput';
import ExpDateInputs from './ExpDateInput';
import OwnerNameInput from './OwnerNameInput';
import CVCInput from './CVCInput';
import PasswordInputs from './PasswordInputs';

export type CardNumberState = [string, string, string, string];
export type PasswordState = [string, string];

const AddCardForm: VFC = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand>({ name: '', color: '' });
  const [ownerName, setOwnerName] = useState('');
  const [cardNumber, setCardNumber] = useState<CardNumberState>(['', '', '', '']);
  const [expDate, setExpDate] = useState<ExpDate>({ year: '', month: '' });
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState<PasswordState>(['', '']);
  const [isCardBrandModalVisible, setIsCardBrandModalVisible] = useState(false);
  const [isNicknameModalVisible, setIsNicknameModalVisible] = useState(false);
  const [nickname, setNickname] = useState('');

  const onClickCardBrandButton = (cardBrand: CardBrand) => {
    setCardBrand(cardBrand);
    setIsCardBrandModalVisible(false);
  };

  const onSetCardBrand = () => {
    const [firstCardNumber, secondCardNumber] = cardNumber;

    if (firstCardNumber.length !== CARD_NUMBER_DIGITS || secondCardNumber.length !== CARD_NUMBER_DIGITS) {
      setCardBrand({ name: '', color: '' });
      return;
    }

    const cardBrand = CARD_BRAND[Number(secondCardNumber.charAt(3))];

    if (!cardBrand) {
      setIsCardBrandModalVisible(true);
      return;
    }

    setCardBrand(cardBrand);
  };

  const isCardBrandEmpty = () => {
    const [firstCardNumber, secondCardNumber] = cardNumber;

    return (
      cardBrand.name === '' &&
      firstCardNumber.length === CARD_NUMBER_DIGITS &&
      secondCardNumber.length === CARD_NUMBER_DIGITS
    );
  };

  const onClickNextButton = () => {
    if (isCardBrandEmpty()) {
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

  useEffect(() => {
    onSetCardBrand();
  }, cardNumber.slice(0, 2));

  return (
    <AddCardFormContainer>
      <CreditCard
        className="credit-card"
        cardBrand={cardBrand}
        expDate={expDate}
        ownerName={ownerName}
        cardNumber={cardNumber.join(CARD_NUMBER_SEPARATOR)}
      />
      <form onSubmit={onSubmitCard}>
        <CardNumberInputs cardNumber={cardNumber} setCardNumber={setCardNumber} />
        <ExpDateInputs expDate={expDate} setExpDate={setExpDate} />
        <OwnerNameInput ownerName={ownerName} setOwnerName={setOwnerName} />
        <CVCInput CVC={CVC} setCVC={setCVC} />
        <PasswordInputs password={password} setPassword={setPassword} />

        <Button type="button" position="bottom-right" onClick={onClickNextButton}>
          다음
        </Button>

        {isCardBrandModalVisible && (
          <CardBrandModal
            cardBrands={CARD_BRAND}
            onClickCardBrandButton={onClickCardBrandButton}
            modalClose={() => setIsCardBrandModalVisible(false)}
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
    </AddCardFormContainer>
  );
};

export default AddCardForm;
