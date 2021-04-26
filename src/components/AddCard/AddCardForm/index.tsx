import { ChangeEvent, FocusEvent, FormEvent, useEffect, useRef, useState } from 'react';
import AddCardInputLabel from './AddCardInputLabel';
import CreditCard from '../../common/CreditCard';
import CardBrandModal from '../CardBrandModal';
import NicknameModal from '../NicknameModal';
import Container from '../../common/Container';
import Input from '../../common/Input';
import Button from '../../common/Button';
import CARD_BRAND from '../../../constants/cardData';
import { AddCardFormContainer, AddCardInputContainer } from './styles';
import { CardBrand, CardNumber, ExpDate, Password } from '../../../types';
import {
  isValidCardNumber,
  isValidCVC,
  isValidExpMonth,
  isValidExpYear,
  isValidOwnerName,
  isValidPassword,
  isAllInputFilled,
} from './validator';

const AddCardForm = () => {
  const [cardBrand, setCardBrand] = useState({ name: '', color: '' });
  const [ownerName, setOwnerName] = useState('');
  const [cardNumber, setCardNumber] = useState<CardNumber>(['', '', '', '']);
  const [expDate, setExpDate] = useState<ExpDate>({ year: '', month: '' });
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState<Password>(['', '']);
  const [isCardBrandModalVisible, setIsCardBrandModalVisible] = useState(false);
  const [isNicknameModalVisible, setIsNicknameModalVisible] = useState(false);
  const [nickname, setNickname] = useState('');

  const onChangeCardNumber = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isValidCardNumber(value)) return;

    const nextValue: CardNumber = [...cardNumber];

    nextValue[index] = value;
    setCardNumber(nextValue);
  };

  const onChangeExpMonth = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpMonth(value)) return;

    setExpDate({ ...expDate, month: value });
  };

  const onChangeExpYear = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpYear(value)) return;

    setExpDate({ ...expDate, year: value });
  };

  const onBlurExpDate = ({ target: { value } }: FocusEvent<HTMLInputElement>, index: string) => {
    if (value.length !== 1) return;

    setExpDate({ ...expDate, [index]: '0' + value });
  };

  const onChangeOwnerName = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidOwnerName(value)) return;

    setOwnerName(value.toUpperCase());
  };

  const onChangeCVC = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidCVC(value)) return;

    setCVC(value);
  };

  const onChangePassword = ({ target: { value } }: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!isValidPassword(value)) return;

    const nextPassword: Password = [...password];

    nextPassword[index] = value;
    setPassword(nextPassword);
  };

  const onClickCardBrandButton = (cardBrand: CardBrand) => {
    setCardBrand(cardBrand);
    setIsCardBrandModalVisible(false);
  };

  const onSetCardBrand = () => {
    if (cardNumber[0].length !== 4 || cardNumber[1].length !== 4) {
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
      alert('입력이 완료되지 않았습니다.');
      return;
    }

    setIsNicknameModalVisible(true);
  };

  const onSubmitCard = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('카드가 등록되었습니다.');
  };

  return (
    <AddCardFormContainer>
      <CreditCard
        className="credit-card"
        cardBrand={cardBrand}
        expDate={expDate}
        ownerName={ownerName}
        cardNumber={cardNumber}
      />
      <form onSubmit={onSubmitCard}>
        <AddCardInputLabel label={'카드번호'}>
          <AddCardInputContainer>
            {['text', 'text', 'password', 'password']
              .map((type, index) => (
                <Input
                  key={index}
                  type={type}
                  textCenter
                  maxLength={4}
                  width="16%"
                  value={cardNumber[index]}
                  onChange={event => onChangeCardNumber(event, index)}
                />
              ))
              .reduce(
                (acc: JSX.Element[], curr, index, array) => [...acc, <span key={index + array.length}>-</span>, curr],
                []
              )
              .slice(1)}
          </AddCardInputContainer>
        </AddCardInputLabel>
        <AddCardInputLabel label={'만료일'} width="40%">
          <AddCardInputContainer>
            <Input
              type="text"
              placeholder="MM"
              textCenter
              maxLength={2}
              width="40%"
              value={expDate.month}
              onChange={onChangeExpMonth}
              onBlur={event => onBlurExpDate(event, 'month')}
            />
            /
            <Input
              type="text"
              placeholder="YY"
              textCenter
              maxLength={2}
              width="40%"
              value={expDate.year}
              onChange={onChangeExpYear}
              onBlur={event => onBlurExpDate(event, 'year')}
            />
          </AddCardInputContainer>
        </AddCardInputLabel>
        <AddCardInputLabel label={['카드 소유자 이름', `${ownerName.length} / 30`]}>
          <AddCardInputContainer>
            <Input
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              type="text"
              width="90%"
              maxLength={30}
              value={ownerName}
              onChange={onChangeOwnerName}
            />
          </AddCardInputContainer>
        </AddCardInputLabel>
        <AddCardInputLabel label={'보안 코드(CVC/CVV)'}>
          <AddCardInputContainer width="25%">
            <Input type="password" maxLength={3} textCenter value={CVC} onChange={onChangeCVC} />
          </AddCardInputContainer>
          <Container className="question-mark">
            <img src="/buttons/question-mark-btn.svg" alt="cvc/cvv 도움말" />
          </Container>
        </AddCardInputLabel>
        <AddCardInputLabel label={'카드 비밀번호'}>
          <Container flex justifyContent="space-between" width="60%">
            <AddCardInputContainer width="23%">
              <Input type="password" textCenter value={password[0]} onChange={event => onChangePassword(event, 0)} />
            </AddCardInputContainer>
            <AddCardInputContainer width="23%">
              <Input type="password" textCenter value={password[1]} onChange={event => onChangePassword(event, 1)} />
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
            cardNumber={cardNumber}
            expDate={expDate}
            cardBrand={cardBrand}
          />
        )}
      </form>
    </AddCardFormContainer>
  );
};

export default AddCardForm;
