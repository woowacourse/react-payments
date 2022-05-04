import { useState, useMemo } from 'react';

import {
  CardExpireDateInput,
  CardHolderNameInput,
  CardInfoForm,
  CardNumberInput,
  CardPasswordInput,
  CardPreview,
  CardSecurityCodeInput,
} from '../components';

import { Header, Title } from '../components/common/styled';
import Button from './../components/common/Button';
import GoBackButton from '../components/GoBackButton';

import { CARD_INFO_RULES, CARD_REGISTER_SUCCESS_MESSAGE } from '../constants';

export default function AddCardPage() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expireDate, setExpireDate] = useState(['', '']);
  const [holderName, setHolderName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  const handleCardNumberUpdate = ({ target: { value } }, order) => {
    if (!Number.isInteger(Number(value)) || value.length > CARD_INFO_RULES.NUMBER_UNIT_LENGTH) return;

    setCardNumber(prevValue => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
  };

  const handleExpireDateUpdate = ({ target: { value } }, order) => {
    const parsedValue = value.startsWith('0') && value.length !== 1 ? value.slice(1) : value;

    if (!/^\d{0,2}$/.test(parsedValue)) return;

    if (order === 0 && value !== '0' && value !== '' && (Number(parsedValue) > 12 || Number(parsedValue) < 1)) {
      return;
    }

    setExpireDate(prevValue => {
      const newValue = [...prevValue];
      newValue[order] = parsedValue.length === 1 && Number(parsedValue) !== 0 ? `0${parsedValue}` : parsedValue;

      return newValue;
    });
  };

  const handleHolderNameUpdate = ({ target: { value } }) => {
    if (!/^[a-z]*$/i.test(value) || value.length > CARD_INFO_RULES.HOLDER_NAME_MAX_LENGTH) return;

    setHolderName(value.toUpperCase());
  };

  const handleSecurityCodeUpdate = ({ target: { value } }) => {
    if (!Number.isInteger(Number(value)) || value.length > CARD_INFO_RULES.SECURITY_CODE_LENGTH) return;

    setSecurityCode(value);
  };

  const handlePasswordUpdate = ({ target: { value } }, order) => {
    if (!Number.isInteger(Number(value)) || value.length > 1) return;

    setPassword(prevValue => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
  };

  const handleCardInfoSubmit = () => {
    alert(CARD_REGISTER_SUCCESS_MESSAGE);
  };

  const isValidCardNumber = useMemo(() => {
    const { NUMBER_UNIT_COUNT, NUMBER_UNIT_LENGTH } = CARD_INFO_RULES;
    return cardNumber.join('').length === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH;
  }, [cardNumber]);

  const isValidExpireDate = useMemo(() => {
    return expireDate.join('').length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH;
  }, [expireDate]);

  const isValidSecurityCode = useMemo(() => {
    return securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH;
  }, [securityCode]);

  const isValidPassword = useMemo(() => {
    return password.join('').length === CARD_INFO_RULES.PASSWORD_LENGTH;
  }, [password]);

  return (
    <>
      <Header>
        <GoBackButton />
        <Title>카드 추가</Title>
      </Header>
      <CardPreview
        cardNumber={cardNumber}
        holderName={holderName}
        expireDate={expireDate}
        isComplete={isValidCardNumber && isValidExpireDate && isValidSecurityCode && isValidPassword}
      />
      <CardInfoForm autoComplete="off">
        <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumberUpdate} />
        <CardExpireDateInput expireDate={expireDate} onChange={handleExpireDateUpdate} />
        <CardHolderNameInput holderName={holderName} onChange={handleHolderNameUpdate} />
        <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCodeUpdate} />
        <CardPasswordInput password={password} onChange={handlePasswordUpdate} />
      </CardInfoForm>
      {isValidCardNumber && isValidExpireDate && isValidSecurityCode && isValidPassword && (
        <Button text="다음" onClick={handleCardInfoSubmit} />
      )}
    </>
  );
}
