import { useState, useMemo, useEffect } from 'react';
import Head from '../components/Head';
import styled from 'styled-components';
import Card from '../components/Card';
import LabeledInput from '../components/LabeledInput';
import InfoLabel from '../components/InfoLabel';
import SubmitButton from '../components/SubmitButton';
import validator from '../validation';
import Input from '../components/Input';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 158px;
  padding-top: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 28px 16px;
  gap: 15px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap};
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function CardAddPage() {
  const [companyName, setCompanyName] = useState('포코카드');
  const [cardNumbers, setCardNumbers] = useState([]);
  const [expiredDate, setExpiredDate] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [password, setPassword] = useState(['', '']);
  const [cardAddCondition, setCardAddCondition] = useState({
    cardNumbers: false,
    expiredDate: false,
    ownerName: false,
    securityNumber: false,
    password: false,
  });

  const convertedCardNumbers = useMemo(() => {
    return cardNumbers.map((cardNumber, index) =>
      index >= 2 ? '●'.repeat(cardNumber.length) : cardNumber
    );
  }, [cardNumbers]);

  const convertedExpiredDate = useMemo(() => {
    return expiredDate.month || expiredDate.year
      ? `${expiredDate.month}${expiredDate.month.length === 2 ? '/' : ''}${expiredDate.year}`
      : '';
  }, [expiredDate]);

  useEffect(() => {
    setCardAddCondition({
      cardNumbers: validator.validateCardNumbers(cardNumbers.join('-')),
      expiredDate: validator.validateExpiredDate(convertedExpiredDate),
      ownerName: validator.validateOwnerName(ownerName),
      securityNumber: validator.validateSecurityNumber(securityNumber),
      password: validator.validatePassword(password.join('')),
    });
  }, [cardNumbers, expiredDate, ownerName, securityNumber, password]);

  const handleChangeCardNumbersInput = ({ nativeEvent: { data, inputType }, target }) => {
    const cardNumberRegex = /[0-9-]/;

    if (!cardNumberRegex.test(data) && inputType !== 'deleteContentBackward') {
      return;
    }

    const inputCardNumbers = target.value.split('-');
    const targetIndex = convertedCardNumbers.findIndex(
      (numbers, index) => numbers !== inputCardNumbers[index]
    );

    if (inputCardNumbers.join().length < convertedCardNumbers.join().length) {
      const newCardNumbers = cardNumbers.filter((_, index) => index !== targetIndex);
      setCardNumbers(newCardNumbers);
      return;
    }

    if (targetIndex === -1) {
      setCardNumbers(cardNumbers.concat([inputCardNumbers[inputCardNumbers.length - 1]]));
      return;
    }

    if (targetIndex < 2) {
      setCardNumbers(inputCardNumbers);
      return;
    }

    const numberIndex = inputCardNumbers[targetIndex]
      .split('')
      .findIndex(char => char === '0' || Number(char));

    if (numberIndex == -1) {
      return;
    }

    const inputNumber = inputCardNumbers[targetIndex][numberIndex];
    const newCardNumbers = cardNumbers.map((number, index) => {
      if (index === targetIndex) {
        return number.length === numberIndex
          ? number + inputNumber
          : number.slice(0, numberIndex) + inputNumber + number.slice(numberIndex);
      }
      return number;
    });
    setCardNumbers(newCardNumbers);
  };

  const handleChangeExpiredDateInput = ({ nativeEvent: { data, inputType }, target }) => {
    const cardNumberRegex = /[0-9/]/;

    if (!cardNumberRegex.test(data) && inputType !== 'deleteContentBackward') {
      return;
    }

    if (inputType === 'deleteContentBackward' && target.value.length === 2) {
      setExpiredDate({ month: expiredDate.month[0], year: '' });
      return;
    }

    const [month, year] = target.value.split('/');

    setExpiredDate({ month: month || '', year: year || '' });
  };

  const handleChangeOwnerNameInput = ({ nativeEvent: { data, inputType }, target }) => {
    const regex = /[a-zA-Z ]/;

    if (!regex.test(data)) {
      return;
    }

    setOwnerName(target.value.toUpperCase());
  };

  const handleChangeSecurityNumber = ({ nativeEvent: { data, inputType }, target }) => {
    const inputtedValueRegex = /[0-9]/;

    if (!inputtedValueRegex.test(data) && inputType !== 'deleteContentBackward') {
      return;
    }

    setSecurityNumber(target.value);
  };

  const handleChangePassword = ({ nativeEvent: { data, inputType }, target }, index) => {
    const inputtedValueRegex = /[0-9]/;

    if (!inputtedValueRegex.test(data) && inputType !== 'deleteContentBackward') {
      return;
    }

    const updatedPassword = password.map((number, aaa) => (aaa === index ? target.value : number));
    setPassword(updatedPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (Object.values(cardAddCondition).every(value => value === true)) {
      alert('카드 정보가 저장되었습니다.');
    }
  };

  return (
    <Page>
      <Head title="카드 추가" />
      <CardSection>
        <Card
          companyName={companyName}
          cardNumbers={convertedCardNumbers}
          ownerName={ownerName}
          expiredDate={convertedExpiredDate}
        />
      </CardSection>
      <Form onSubmit={handleSubmit}>
        <LabeledInput
          value={convertedCardNumbers.join('-')}
          isShowLengthChecker={false}
          handleInputChange={handleChangeCardNumbersInput}
          countInput={1}
          invalidMessage="0000-0000-0000-0000 형식으로 입력해주세요."
          inputProps={{
            type: 'text',
            width: '318px',
            isCenter: true,
            maxLength: 19,
            placeholder: 'ex. 1111-2222-3333-4444',
            isValid: cardAddCondition.cardNumbers,
          }}
          inputLabelProps={{
            label: '카드 번호',
          }}
        />
        <LabeledInput
          value={convertedExpiredDate}
          handleInputChange={handleChangeExpiredDateInput}
          isShowLengthChecker={false}
          countInput={1}
          invalidMessage="올바르지 않은 만료일입니다."
          inputProps={{
            type: 'text',
            width: '137px',
            isCenter: true,
            maxLength: 5,
            placeholder: 'MM / YY',
            isValid: cardAddCondition.expiredDate,
          }}
          inputLabelProps={{
            label: '만료일',
          }}
        />
        <LabeledInput
          value={ownerName}
          handleInputChange={handleChangeOwnerNameInput}
          headerWidth="318px"
          isShowLengthChecker={true}
          countInput={1}
          invalidMessage="소유자 이름은 영어로 입력해주세요."
          inputProps={{
            type: 'text',
            width: '318px',
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
            isCenter: false,
            maxLength: 30,
            isValid: cardAddCondition.ownerName,
          }}
          inputLabelProps={{
            label: '카드 소유자 이름(선택)',
          }}
        />
        <FormRow>
          <LabeledInput
            value={securityNumber}
            handleInputChange={handleChangeSecurityNumber}
            isShowLengthChecker={false}
            countInput={1}
            invalidMessage="보안 코드는 세 자리의 숫자로 입력해주세요."
            inputProps={{
              type: 'password',
              width: '84px',
              isCenter: true,
              maxLength: 3,
              isValid: cardAddCondition.securityNumber,
            }}
            inputLabelProps={{
              label: '보안 코드(CVC/CVV)',
            }}
          />
          <InfoLabel />
        </FormRow>
        <FormRow alignItems="flex-end" gap={'4px'}>
          <LabeledInput
            value={password}
            handleInputChange={handleChangePassword}
            isShowLengthChecker={false}
            countInput={2}
            invalidMessage="비밀 번호는 숫자로 입력해주세요."
            inputProps={{
              type: 'password',
              width: '43px',
              isCenter: true,
              maxLength: 1,
              isValid: cardAddCondition.password,
            }}
            inputLabelProps={{
              label: '카드 비밀번호',
            }}
          />
          <Input
            type="password"
            defaultValue="."
            width="43px"
            isCenter={true}
            maxLength={1}
            disabled={true}
            backgroundColor="#fff"
          />
          <Input
            type="password"
            defaultValue="."
            width="43px"
            isCenter={true}
            maxLength={1}
            disabled={true}
            backgroundColor="#fff"
          />
        </FormRow>
        <SubmitButtonContainer>
          <SubmitButton
            label="다음"
            width={'51px'}
            height={'34px'}
            hidden={Object.values(cardAddCondition).some(value => value === false)}
          />
        </SubmitButtonContainer>
      </Form>
    </Page>
  );
}

export default CardAddPage;
