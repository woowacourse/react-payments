import { ChangeEvent, useEffect, useRef, useState } from 'react';
import AddCardInputContainer from './AddCardInputContainer';
import CreditCard from '../../CreditCard';
import Container from '../../common/Container';
import Input from '../../common/Input';
import Button from '../../common/Button';
import CARD_DATA from '../../../constants/cardData';
import { GRAY } from '../../../constants/palette';
import { AddCardFormContainer } from './styles';

interface Index {
  [key: string]: (param: number[]) => void;
}

const AddCardForm = () => {
  const [cardName, setCardName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [firstCardNumber, setFirstCardNumber] = useState<number[]>([]);
  const [secondCardNumber, setSecondCardNumber] = useState<number[]>([]);
  const [thirdCardNumber, setThirdCardNumber] = useState<number[]>([]);
  const [fourthCardNumber, setFourthCardNumber] = useState<number[]>([]);

  const [expDate, setExpDate] = useState({ year: '', month: '' });
  const [CVC, setCVC] = useState('');
  const [password, setPassword] = useState('');
  const [cardColor, setCardColor] = useState('');

  const setCardNumberMap: Index = {
    first: setFirstCardNumber,
    second: setSecondCardNumber,
    third: setThirdCardNumber,
    fourth: setFourthCardNumber,
  };

  const onChangeCardNumber = ({ target }: ChangeEvent<HTMLInputElement>, key: string) => {
    if (target.value.length > 4) return;

    const inputNumber = target.value.split('').map(chr => Number(chr));
    setCardNumberMap[key](inputNumber);
  };

  const onChangeExpDate = ({ target }: ChangeEvent<HTMLInputElement>, key: string) => {
    if (target.value.length > 2 || (key === 'month' && target.valueAsNumber > 12)) return;

    const nextExpDate = { ...expDate, [key]: target.value };

    setExpDate(nextExpDate);
  };

  const onChangeOwnerName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const regex = /[^a-zA-Z\s]/g;

    if (target.value.length > 30 || regex.test(target.value)) return;

    setOwnerName(target.value.toUpperCase());
  };

  const onChangeCVC = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (target.value.length > 3 || isNaN(Number(target.value))) return;

    setCVC(target.value);
  };

  const onChangePassword = ({ target }: ChangeEvent<HTMLInputElement>, index: number) => {
    if (target.value.length > 1) return;

    const nextPassword = password.split('');

    nextPassword[index] = target.value;
    setPassword(nextPassword.join(''));
  };

  useEffect(() => {
    (() => {
      if (firstCardNumber.length + secondCardNumber.length === 8) {
        const { CARD_NAME, COLOR } = CARD_DATA[secondCardNumber[3]];

        setCardName(CARD_NAME);
        setCardColor(COLOR);
      } else {
        setCardName('');
        setCardColor('');
      }
    })();
  }, [firstCardNumber, secondCardNumber]);

  return (
    <AddCardFormContainer>
      <CreditCard
        className="credit-card"
        cardColor={cardColor}
        expDate={expDate}
        cardName={cardName}
        ownerName={ownerName}
        cardNumber={{
          first: firstCardNumber,
          second: secondCardNumber,
          third: thirdCardNumber,
          fourth: fourthCardNumber,
        }}
      />
      <form>
        <AddCardInputContainer label={'카드번호'}>
          <Container flex alignItems="center" justifyContent="center" backgroundColor={GRAY}>
            <Input
              type="number"
              textCenter
              min="1111"
              max="9999"
              width="16%"
              value={firstCardNumber.join('')}
              onChange={event => onChangeCardNumber(event, 'first')}
            />
            -
            <Input
              type="number"
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
              type="number"
              placeholder="MM"
              textCenter
              min={1}
              max={12}
              width="40%"
              value={expDate.month}
              onChange={event => onChangeExpDate(event, 'month')}
            />
            /
            <Input
              type="number"
              placeholder="YY"
              textCenter
              min={0}
              max={99}
              width="40%"
              value={expDate.year}
              onChange={event => onChangeExpDate(event, 'year')}
            />
          </Container>
        </AddCardInputContainer>
        <AddCardInputContainer label={['카드 소유자 이름(선택)', `${ownerName.length} / 30`]}>
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
        <Button className="submit-btn">다음</Button>
      </form>
    </AddCardFormContainer>
  );
};

export default AddCardForm;
