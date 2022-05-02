import { useState, useMemo } from 'react';
import Head from '../components/Head';
import Card from '../components/Card';
import LabeledInput from '../components/LabeledInput';
import Tooltip from '../components/Tooltip';
import SubmitButton from '../components/SubmitButton';
import validator from '../validation';
import Input from '../components/Input';
import { Page, CardSection, Form, FormRow, SubmitButtonContainer } from '../style/page';
import {
  cardNumberInputRegex,
  expiredDateInputRegex,
  ownerNameInputRegex,
  numberRegex,
} from '../constant/regularExpression';
import { INPUT_TYPE } from '../constant';
import MESSAGE from '../constant/message';
import { CARD_NUMBER_MARK, CARD_NUMBER_SEPARATOR, DATE_SEPARATOR } from '../constant/mark';

function CardAddPage() {
  const [companyName, setCompanyName] = useState('포코카드');
  const [cardNumbers, setCardNumbers] = useState([]);
  const [expiredDate, setExpiredDate] = useState({ month: '', year: '' });
  const [ownerName, setOwnerName] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');
  const [password, setPassword] = useState(['', '']);

  const convertedCardNumbers = useMemo(() => {
    return cardNumbers.map((cardNumber, index) =>
      index >= 2 ? CARD_NUMBER_MARK.repeat(cardNumber.length) : cardNumber
    );
  }, [cardNumbers]);

  const convertedExpiredDate = useMemo(() => {
    return expiredDate.month || expiredDate.year
      ? `${expiredDate.month}${expiredDate.month.length === 2 ? DATE_SEPARATOR : ''}${
          expiredDate.year
        }`
      : '';
  }, [expiredDate]);

  const cardAddValidation = {
    isValidCardNumbers: validator.validateCardNumbers(cardNumbers.join(CARD_NUMBER_SEPARATOR)),
    isValidExpiredDate: validator.validateExpiredDate(convertedExpiredDate),
    isValidOwnerName: validator.validateOwnerName(ownerName),
    isValidSecurityNumber: validator.validateSecurityNumber(securityNumber),
    isValidPassword: validator.validatePassword(password.join('')),
  };

  const handleChangeCardNumbersInput = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(cardNumberInputRegex, data, inputType)) {
      return;
    }

    const inputCardNumbers = target.value.split(CARD_NUMBER_SEPARATOR);
    const targetIndex = convertedCardNumbers.findIndex(
      (numbers, index) => numbers !== inputCardNumbers[index]
    );

    if (isEnterBackKey(inputCardNumbers, convertedCardNumbers)) {
      const newCardNumbers = cardNumbers.filter((_, index) => index !== targetIndex);
      setCardNumbers(newCardNumbers);
      return;
    }

    if (isFirstEnterOrDashEnter(targetIndex)) {
      setCardNumbers(cardNumbers.concat([inputCardNumbers[inputCardNumbers.length - 1]]));
      return;
    }

    if (isFirstPartOrSecondPart(targetIndex)) {
      setCardNumbers(inputCardNumbers);
      return;
    }

    const numberIndex = inputCardNumbers[targetIndex]
      .split('')
      .findIndex(char => isNumberCharacter(char));

    if (isNotNumber(numberIndex)) {
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

  const isEnterBackKey = (inputCardNumbers, convertedCardNumbers) => {
    return inputCardNumbers.join().length < convertedCardNumbers.join().length;
  };

  const isFirstEnterOrDashEnter = targetIndex => {
    return targetIndex === -1;
  };

  const isFirstPartOrSecondPart = targetIndex => {
    return targetIndex < 2;
  };

  const isNumberCharacter = char => {
    return char === '0' || Number(char);
  };

  const isNotNumber = numberIndex => {
    return numberIndex === -1;
  };

  const handleChangeExpiredDateInput = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(expiredDateInputRegex, data, inputType)) {
      return;
    }

    if (isRemoveSlash(inputType, target.value)) {
      setExpiredDate({ month: expiredDate.month[0], year: '' });
      return;
    }

    const [month, year] = target.value.split(DATE_SEPARATOR);

    setExpiredDate({ month: month || '', year: year || '' });
  };

  const isRemoveSlash = (inputType, inputValue) => {
    return inputType === INPUT_TYPE.BACKWARD && inputValue.length === 2;
  };

  const handleChangeOwnerNameInput = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(ownerNameInputRegex, data, inputType)) {
      return;
    }

    setOwnerName(target.value.toUpperCase());
  };

  const handleChangeSecurityNumber = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(numberRegex, data, inputType)) {
      return;
    }

    setSecurityNumber(target.value);
  };

  const handleChangePassword = ({ nativeEvent: { data, inputType }, target }, childIndex) => {
    if (validator.isInvalidInputData(numberRegex, data, inputType)) {
      return;
    }

    const updatedPassword = password.map((number, index) =>
      index === childIndex ? target.value : number
    );
    setPassword(updatedPassword);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (Object.values(cardAddValidation).every(value => value === true)) {
      alert(MESSAGE.SAVE_CARD_INFO);
    }
  };

  return (
    <Page>
      <Head title="카드 추가" />
      <CardSection>
        <Card
          companyName={companyName}
          cardNumbers={cardNumbers}
          ownerName={ownerName}
          expiredDate={convertedExpiredDate}
        />
      </CardSection>
      <Form onSubmit={handleSubmit}>
        <LabeledInput
          value={convertedCardNumbers.join('-')}
          handleInputChange={handleChangeCardNumbersInput}
          invalidMessage={MESSAGE.INVALID_CARD_NUMBER}
          inputProps={{
            type: 'text',
            width: '318px',
            maxLength: 19,
            placeholder: 'ex. 0000-0000-0000-0000',
            isValid: cardAddValidation.isValidCardNumbers,
          }}
          inputLabelProps={{
            label: '카드 번호',
          }}
        />
        <LabeledInput
          value={convertedExpiredDate}
          handleInputChange={handleChangeExpiredDateInput}
          invalidMessage={MESSAGE.INVALID_EXPIRED_DATE}
          inputProps={{
            type: 'text',
            width: '137px',
            maxLength: 5,
            placeholder: 'MM / YY',
            isValid: cardAddValidation.isValidExpiredDate,
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
          invalidMessage={MESSAGE.INVALID_OWNER_NAME}
          inputProps={{
            type: 'text',
            width: '318px',
            placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
            isCenter: false,
            maxLength: 30,
            isValid: cardAddValidation.isValidOwnerName,
          }}
          inputLabelProps={{
            label: '카드 소유자 이름(선택)',
          }}
        />
        <FormRow>
          <LabeledInput
            value={securityNumber}
            handleInputChange={handleChangeSecurityNumber}
            invalidMessage={MESSAGE.INVALID_SECURITY_NUMBER}
            inputProps={{
              type: 'password',
              width: '84px',
              maxLength: 3,
              isValid: cardAddValidation.isValidSecurityNumber,
            }}
            inputLabelProps={{
              label: '보안 코드(CVC/CVV)',
            }}
          />
          <Tooltip message={MESSAGE.TOOLTIP_SECURITY_NUMBER} />
        </FormRow>
        <FormRow alignItems="flex-end" gap={'4px'}>
          <LabeledInput
            value={password}
            handleInputChange={handleChangePassword}
            countInput={2}
            invalidMessage={MESSAGE.INVALID_PASSWORD}
            inputProps={{
              type: 'password',
              width: '43px',
              maxLength: 1,
              isValid: cardAddValidation.isValidSecurityNumber,
            }}
            inputLabelProps={{
              label: '카드 비밀번호',
            }}
          />
          {Array.from({ length: 2 }).map((_, index) => (
            <Input
              key={index}
              type="password"
              defaultValue="."
              width="43px"
              maxLength={1}
              disabled={true}
              backgroundColor="#fff"
            />
          ))}
        </FormRow>
        <SubmitButtonContainer>
          <SubmitButton
            label="다음"
            width={'51px'}
            height={'34px'}
            hidden={Object.values(cardAddValidation).some(value => value === false)}
          />
        </SubmitButtonContainer>
      </Form>
    </Page>
  );
}

export default CardAddPage;
