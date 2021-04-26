import { ChangeEvent, FocusEvent, FormEvent, MutableRefObject, useEffect, useRef, useState } from 'react';
import AddCardInputLabel from './AddCardInputLabel';
import CreditCard from '../../common/CreditCard';
import CardBrandModal from '../CardBrandModal';
import NicknameModal from '../NicknameModal';
import Container from '../../common/Container';
import Input from '../../common/Input';
import Button from '../../common/Button';
import CARD_BRAND from '../../../constants/cardData';
import { LABEL, PLACEHOLDER } from '../../../constants/addCardForm';
import {
  CARD_NUMBER_DIGITS,
  CARD_NUMBER_SEPARATOR,
  EXP_DATE_DIGITS,
  EXP_DATE_WHITESPACE_CHARACTER,
  CVC_DIGITS,
  MAX_OWNER_NAME_LENGTH,
} from '../../../constants/creditCard';
import { ALERT } from '../../../constants/messages';
import { AddCardFormContainer, AddCardInputContainer } from './styles';
import { CardBrand, ExpDate } from '../../../types';
import {
  isValidCardNumber,
  isValidCVC,
  isValidExpMonth,
  isValidExpYear,
  isValidOwnerName,
  isValidPassword,
  isAllInputFilled,
} from './validator';

export type CardNumberState = [string, string, string, string];
export type PasswordState = [string, string];

const AddCardForm = () => {
  const [cardBrand, setCardBrand] = useState({ name: '', color: '' });
  const [ownerName, setOwnerName] = useState('');
  const [cardNumber, setCardNumber] = useState<CardNumberState>(['', '', '', '']);
  const [expDate, setExpDate] = useState<ExpDate>({ year: '', month: '' });
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState<PasswordState>(['', '']);
  const [isCardBrandModalVisible, setIsCardBrandModalVisible] = useState(false);
  const [isNicknameModalVisible, setIsNicknameModalVisible] = useState(false);
  const [nickname, setNickname] = useState('');

  const secondCardNumberInputRef = useRef<HTMLInputElement>(null);
  const thirdCardNumberInputRef = useRef<HTMLInputElement>(null);
  const fourthCardNumberInputRef = useRef<HTMLInputElement>(null);
  const expYearInputRef = useRef<HTMLInputElement>(null);
  const secondPasswordInputRef = useRef<HTMLInputElement>(null);

  const focusNextCardNumberInput = (index: number) => {
    const cardNumberInputRefs = [secondCardNumberInputRef, thirdCardNumberInputRef, fourthCardNumberInputRef];

    cardNumberInputRefs[index].current?.focus();
  };

  const onChangeCardNumber = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isValidCardNumber(value)) return;

    const nextValue: CardNumberState = [...cardNumber];

    nextValue[index] = value;
    setCardNumber(nextValue);

    if (nextValue[index].length === CARD_NUMBER_DIGITS && index < 3) {
      focusNextCardNumberInput(index);
    }
  };

  const onChangeExpMonth = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpMonth(value)) return;

    setExpDate({ ...expDate, month: value });

    if (value.length === EXP_DATE_DIGITS) {
      expYearInputRef.current?.focus();
    }
  };

  const onChangeExpYear = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpYear(value)) return;

    setExpDate({ ...expDate, year: value });
  };

  const onBlurExpDate = ({ target: { value } }: FocusEvent<HTMLInputElement>, index: keyof ExpDate) => {
    if (value.length !== 1) return;

    setExpDate({ ...expDate, [index]: EXP_DATE_WHITESPACE_CHARACTER + value });
  };

  const onChangeOwnerName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidOwnerName(value)) return;

    setOwnerName(value.toUpperCase());
  };

  const onChangeCVC = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidCVC(value)) return;

    setCVC(value);
  };

  const onChangePassword = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    if (!isValidPassword(value)) return;

    const nextPassword: PasswordState = [...password];

    nextPassword[index as number] = value;
    setPassword(nextPassword);

    if (index === 0 && value.length === 1) {
      secondPasswordInputRef.current?.focus();
    }
  };

  const onClickCardBrandButton = (cardBrand: CardBrand) => {
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
    if (cardBrand.name === '') {
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
    <AddCardFormContainer>
      <CreditCard
        className="credit-card"
        cardBrand={cardBrand}
        expDate={expDate}
        ownerName={ownerName}
        cardNumber={cardNumber.join(CARD_NUMBER_SEPARATOR)}
      />
      <form onSubmit={onSubmitCard}>
        <AddCardInputLabel label={LABEL.CARD_NUMBER}>
          <AddCardInputContainer>
            {[
              { type: 'text', ref: null },
              { type: 'text', ref: secondCardNumberInputRef },
              { type: 'password', ref: thirdCardNumberInputRef },
              { type: 'password', ref: fourthCardNumberInputRef },
            ]
              .map(({ type, ref }, index) => (
                <Input
                  key={index}
                  type={type}
                  ref={ref}
                  textCenter
                  maxLength={CARD_NUMBER_DIGITS}
                  width="16%"
                  value={cardNumber[index]}
                  onChange={event => onChangeCardNumber(event, index)}
                />
              ))
              .reduce(
                (acc: JSX.Element[], curr, index, array) => [
                  ...acc,
                  <span key={index + array.length}>{CARD_NUMBER_SEPARATOR}</span>,
                  curr,
                ],
                []
              )
              .slice(1)}
          </AddCardInputContainer>
        </AddCardInputLabel>
        <AddCardInputLabel label={LABEL.EXP_DATE} width="40%">
          <AddCardInputContainer>
            <Input
              type="text"
              placeholder={PLACEHOLDER.MONTH}
              textCenter
              maxLength={EXP_DATE_DIGITS}
              width="40%"
              value={expDate.month}
              onChange={onChangeExpMonth}
              onBlur={event => onBlurExpDate(event, 'month')}
            />
            /
            <Input
              type="text"
              ref={expYearInputRef}
              placeholder={PLACEHOLDER.YEAR}
              textCenter
              maxLength={EXP_DATE_DIGITS}
              width="40%"
              value={expDate.year}
              onChange={onChangeExpYear}
              onBlur={event => onBlurExpDate(event, 'year')}
            />
          </AddCardInputContainer>
        </AddCardInputLabel>
        <AddCardInputLabel label={[LABEL.OWNER_NAME, `${ownerName.length} / ${MAX_OWNER_NAME_LENGTH}`]}>
          <AddCardInputContainer>
            <Input
              placeholder={PLACEHOLDER.OWNER_NAME}
              type="text"
              width="90%"
              maxLength={MAX_OWNER_NAME_LENGTH}
              value={ownerName}
              onChange={onChangeOwnerName}
            />
          </AddCardInputContainer>
        </AddCardInputLabel>
        <AddCardInputLabel label={LABEL.CVC}>
          <AddCardInputContainer width="25%">
            <Input type="password" maxLength={CVC_DIGITS} textCenter value={CVC} onChange={onChangeCVC} />
          </AddCardInputContainer>
          <Container className="question-mark">
            <img src="/buttons/question-mark-btn.svg" alt="cvc/cvv 도움말" />
          </Container>
        </AddCardInputLabel>
        <AddCardInputLabel label={LABEL.PASSWORD}>
          <Container flex justifyContent="space-between" width="60%">
            <AddCardInputContainer width="23%">
              <Input type="password" textCenter value={password[0]} onChange={event => onChangePassword(event, 0)} />
            </AddCardInputContainer>
            <AddCardInputContainer width="23%">
              <Input
                type="password"
                ref={secondPasswordInputRef}
                textCenter
                value={password[1]}
                onChange={event => onChangePassword(event, 1)}
              />
            </AddCardInputContainer>
            <AddCardInputContainer width="23%">
              <span className="password-dot" />
            </AddCardInputContainer>
            <AddCardInputContainer width="23%">
              <span className="password-dot" />
            </AddCardInputContainer>
          </Container>
        </AddCardInputLabel>
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
