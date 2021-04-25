import { ChangeEvent, FocusEvent, useEffect, useRef, useState } from 'react';
import AddCardInputContainer from './AddCardInputContainer';
import CreditCard from '../../CreditCard';
import CardNameModal from '../CardBrandModal';
import Container from '../../common/Container';
import Input from '../../common/Input';
import Button from '../../common/Button';
import CARD_DATA from '../../../constants/cardData';
import { GRAY } from '../../../constants/palette';
import { AddCardFormContainer } from './styles';
import { CardBrand } from '../../../types';
import NicknameModal from '../NicknameModal';

interface Index {
  [key: string]: (param: number[]) => void;
}

const AddCardForm = () => {
  const [cardBrand, setCardBrand] = useState({
    name: '',
    color: '',
  });
  const [ownerName, setOwnerName] = useState('');
  const [firstCardNumber, setFirstCardNumber] = useState<number[]>([]);
  const [secondCardNumber, setSecondCardNumber] = useState<number[]>([]);
  const [thirdCardNumber, setThirdCardNumber] = useState<number[]>([]);
  const [fourthCardNumber, setFourthCardNumber] = useState<number[]>([]);
  const [expDate, setExpDate] = useState({ year: '', month: '' });
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState(['', '']);
  const [isCardBrandModalVisible, setIsCardBrandModalVisible] = useState(false);
  const [isNicknameModalVisible, setIsNicknameModalVisible] = useState(false);
  const [nickname, setNickname] = useState('');

  const setCardNumberMap: Index = {
    first: setFirstCardNumber,
    second: setSecondCardNumber,
    third: setThirdCardNumber,
    fourth: setFourthCardNumber,
  };

  const onChangeCardNumber = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>, index: string) => {
    const inputKey = (nativeEvent as InputEvent).data;

    if (isNaN(Number(inputKey)) || target.value.length > 4) return;

    const inputNumber = target.value.split('').map(chr => Number(chr));
    setCardNumberMap[index](inputNumber);
  };

  const onChangeExpDate = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>, index: string) => {
    const inputKey = (nativeEvent as InputEvent).data;

    if (
      isNaN(Number(inputKey)) ||
      target.value.length > 2 ||
      Number(target.value) < 0 ||
      (index === 'month' && Number(target.value) > 12)
    )
      return;

    const nextExpDate = { ...expDate, [index]: target.value };

    setExpDate(nextExpDate);
  };

  const onBlurExpDate = ({ target }: FocusEvent<HTMLInputElement>, index: string) => {
    const value = (target as HTMLInputElement).value;

    if (value.length === 1) {
      setExpDate({ ...expDate, [index]: '0' + value });
    }
  };

  const onChangeOwnerName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const regex = /[^a-zA-Z\s]/g;

    if (target.value.length > 30 || regex.test(target.value)) return;

    setOwnerName(target.value.toUpperCase());
  };

  const onChangeCVC = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>) => {
    const inputKey = (nativeEvent as InputEvent).data;

    if (isNaN(Number(inputKey)) || target.value.length > 3) return;

    setCVC(target.value);
  };

  const onChangePassword = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>, index: number) => {
    const inputKey = (nativeEvent as InputEvent).data;

    if (isNaN(Number(inputKey)) || target.value.length > 1) return;

    const nextPassword = [...password];
    nextPassword[index] = target.value;
    setPassword(nextPassword);
  };

  const onClickCardBrandButton = (cardBrand: CardBrand) => {
    setCardBrand(cardBrand);
    setIsCardBrandModalVisible(false);
  };

  useEffect(() => {
    (() => {
      if (firstCardNumber.length + secondCardNumber.length === 8) {
        const cardData = CARD_DATA[secondCardNumber[3]];

        if (!cardData) {
          setIsCardBrandModalVisible(true);
          return;
        }

        setCardBrand(cardData);
      } else {
        setCardBrand({
          name: '',
          color: '',
        });
      }
    })();
  }, [firstCardNumber, secondCardNumber]);

  const isAllInputFilled = () =>
    firstCardNumber.length === 4 &&
    secondCardNumber.length === 4 &&
    thirdCardNumber.length === 4 &&
    fourthCardNumber.length === 4 &&
    cardBrand.name &&
    cardBrand.color &&
    expDate.month.length === 2 &&
    expDate.year.length === 2 &&
    CVC.length === 3 &&
    password[0].length === 1 &&
    password[1].length === 1 &&
    ownerName.length > 0;

  const onClickNextButton = () => {
    if (!isAllInputFilled()) {
      alert('입력이 완료되지 않았습니다.');
      return;
    }

    setIsNicknameModalVisible(true);
  };

  const onSubmitCard = () => {
    alert('카드가 등록되었습니다.');
  };

  return (
    <AddCardFormContainer>
      <CreditCard
        className="credit-card"
        cardBrand={cardBrand}
        expDate={expDate}
        ownerName={ownerName}
        cardNumber={{
          first: firstCardNumber,
          second: secondCardNumber,
          third: thirdCardNumber,
          fourth: fourthCardNumber,
        }}
      />
      <form onSubmit={onSubmitCard}>
        <AddCardInputContainer label={'카드번호'}>
          <Container flex alignItems="center" justifyContent="center" backgroundColor={GRAY}>
            <Input
              type="text"
              textCenter
              min="1111"
              max="9999"
              width="16%"
              value={firstCardNumber.join('')}
              onChange={event => onChangeCardNumber(event, 'first')}
            />
            -
            <Input
              type="text"
              textCenter
              min="1111"
              max="9999"
              width="16%"
              value={secondCardNumber.join('')}
              onChange={event => onChangeCardNumber(event, 'second')}
            />
            -
            <Input
              type="password"
              textCenter
              maxLength={4}
              width="16%"
              value={thirdCardNumber.join('')}
              onChange={event => onChangeCardNumber(event, 'third')}
            />
            -
            <Input
              type="password"
              textCenter
              maxLength={4}
              width="16%"
              value={fourthCardNumber.join('')}
              onChange={event => onChangeCardNumber(event, 'fourth')}
            />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={'만료일'} width="40%">
          <Container flex justifyContent="center" alignItems="center" backgroundColor={GRAY}>
            <Input
              type="text"
              placeholder="MM"
              textCenter
              min={1}
              max={12}
              width="40%"
              value={expDate.month}
              onChange={event => onChangeExpDate(event, 'month')}
              onBlur={event => onBlurExpDate(event, 'month')}
            />
            /
            <Input
              type="text"
              placeholder="YY"
              textCenter
              min={0}
              max={99}
              width="40%"
              value={expDate.year}
              onChange={event => onChangeExpDate(event, 'year')}
              onBlur={event => onBlurExpDate(event, 'year')}
            />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={['카드 소유자 이름', `${ownerName.length} / 30`]}>
          <Container flex justifyContent="center" backgroundColor={GRAY}>
            <Input
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              type="text"
              width="90%"
              value={ownerName}
              onChange={onChangeOwnerName}
            />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={'보안 코드(CVC/CVV)'}>
          <Container flex justifyContent="center" backgroundColor={GRAY} width="25%">
            <Input type="password" max="999" textCenter value={CVC} onChange={onChangeCVC} />
          </Container>
          <Container className="question-mark">
            <img src="/buttons/question-mark-btn.svg" alt="cvc/cvv 도움말" />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={'카드 비밀번호'}>
          <Container flex justifyContent="space-between" width="60%">
            <Container flex justifyContent="center" backgroundColor={GRAY} width="23%">
              <Input type="password" textCenter value={password[0]} onChange={event => onChangePassword(event, 0)} />
            </Container>
            <Container flex justifyContent="center" backgroundColor={GRAY} width="23%">
              <Input type="password" textCenter value={password[1]} onChange={event => onChangePassword(event, 1)} />
            </Container>
            <Container flex justifyContent="center" alignItems="center" width="23%">
              <span className="password-dot" />
            </Container>
            <Container flex justifyContent="center" alignItems="center" width="23%">
              <span className="password-dot" />
            </Container>
          </Container>
        </AddCardInputContainer>
        <Button type="button" position="bottom-right" onClick={onClickNextButton}>
          다음
        </Button>

        {isCardBrandModalVisible && (
          <CardNameModal
            cardData={CARD_DATA}
            onClickCardBrandButton={onClickCardBrandButton}
            modalClose={() => setIsCardBrandModalVisible(false)}
          />
        )}

        {isNicknameModalVisible && (
          <NicknameModal
            nickname={nickname}
            setNickname={setNickname}
            ownerName={ownerName}
            cardNumber={{
              first: firstCardNumber,
              second: secondCardNumber,
              third: thirdCardNumber,
              fourth: fourthCardNumber,
            }}
            expDate={expDate}
            cardBrand={cardBrand}
            modalClose={() => {}}
          />
        )}
      </form>
    </AddCardFormContainer>
  );
};

export default AddCardForm;
