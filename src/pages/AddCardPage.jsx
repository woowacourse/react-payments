import { useState, useMemo, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { CardInfoListContext } from '../context';
import {
  CardExpireDateInput,
  CardHolderNameInput,
  CardNumberInput,
  CardPasswordInput,
  CardPreview,
  CardSecurityCodeInput,
} from '../components';
import { Header, Title } from '../components/common/styled';
import Button from './../components/common/Button';
import Form from '../components/common/Form';
import GoBackButton from '../components/GoBackButton';

import { CARD_INFO_RULES } from '../constants';
import {
  isValidCardExpireDateUnit,
  isValidCardHolderName,
  isValidCardNumberUnit,
  isValidCardPasswordUnit,
  isValidCardSecurityCode,
} from './validators';

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 25px;
`;

export default function AddCardPage() {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expireDate, setExpireDate] = useState(['', '']);
  const [holderName, setHolderName] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [password, setPassword] = useState(['', '']);

  const { addNewCard } = useContext(CardInfoListContext);
  const navigate = useNavigate();

  const handleCardNumberUpdate = ({ target: { value } }, order) => {
    if (!isValidCardNumberUnit(value)) return;

    setCardNumber(prevValue => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
  };

  const handleExpireDateUpdate = ({ target: { value } }, order) => {
    const parsedValue = value.startsWith('0') && value.length !== 1 ? value.slice(1) : value;

    if (!isValidCardExpireDateUnit(value, order)) return;

    setExpireDate(prevValue => {
      const newValue = [...prevValue];
      newValue[order] = parsedValue.length === 1 && Number(parsedValue) !== 0 ? `0${parsedValue}` : parsedValue;

      return newValue;
    });
  };

  const handleHolderNameUpdate = ({ target: { value } }) => {
    if (!isValidCardHolderName(value)) return;

    setHolderName(value.toUpperCase());
  };

  const handleSecurityCodeUpdate = ({ target: { value } }) => {
    if (!isValidCardSecurityCode(value)) return;

    setSecurityCode(value);
  };

  const handlePasswordUpdate = ({ target: { value } }, order) => {
    if (!isValidCardPasswordUnit(value));

    setPassword(prevValue => {
      const newValue = [...prevValue];
      newValue[order] = value;

      return newValue;
    });
  };

  const cardInfoConfirmMessage = `
  카드번호: ${cardNumber.join(' - ')}
  만료일: ${expireDate.join('/')}
  소유자: ${holderName}
  
  위 정보로 카드를 등록하시겠습니까?
`;

  const handleCardInfoSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    if (confirm(cardInfoConfirmMessage)) {
      const cardIndex = addNewCard({
        cardNumber,
        expireDate,
        holderName,
      });
      navigate(`/updateCardNickName/${cardIndex}`, {
        replace: true,
        state: {
          fromAddCardForm: true,
          cardIndex,
        },
      });
    }
  };

  const CardInfoSubmitButton = () => {
    return (
      <ButtonWrapper>
        <Button type="submit">다음</Button>
      </ButtonWrapper>
    );
  };

  const isCompleteCardNumber = useMemo(() => {
    const { NUMBER_UNIT_COUNT, NUMBER_UNIT_LENGTH } = CARD_INFO_RULES;
    return cardNumber.join('').length === NUMBER_UNIT_COUNT * NUMBER_UNIT_LENGTH;
  }, [cardNumber]);

  const isCompleteExpireDate = useMemo(() => {
    return expireDate.join('').length === CARD_INFO_RULES.EXPIRE_DATE_LENGTH;
  }, [expireDate]);

  const isCompleteSecurityCode = useMemo(() => {
    return securityCode.length === CARD_INFO_RULES.SECURITY_CODE_LENGTH;
  }, [securityCode]);

  const isCompletePassword = useMemo(() => {
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
        isComplete={isCompleteCardNumber && isCompleteExpireDate && isCompleteSecurityCode && isCompletePassword}
      />
      <Form onSubmit={handleCardInfoSubmit} autoComplete="off">
        <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumberUpdate} />
        <CardExpireDateInput expireDate={expireDate} onChange={handleExpireDateUpdate} />
        <CardHolderNameInput holderName={holderName} onChange={handleHolderNameUpdate} />
        <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCodeUpdate} />
        <CardPasswordInput password={password} onChange={handlePasswordUpdate} />
        {isCompleteCardNumber && isCompleteExpireDate && isCompleteSecurityCode && isCompletePassword && (
          <CardInfoSubmitButton />
        )}
      </Form>
    </>
  );
}
