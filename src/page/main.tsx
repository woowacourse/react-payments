import styled from 'styled-components';
import {useState} from 'react';

import Card from '../components/card/Card';
import PasswordSection from '../components/form/PasswordSection';
import CardCompanySection from '../components/form/CardCompanySection';
import CardNumberSection from '../components/form/CardNumberSection';
import ExpirationDateSection from '../components/form/ExpirationDateSection';
import CardCvcSection from '../components/form/CardCvcSection';
import Button from '../components/button/Button';

import {CardCompany, CardForm, CardNumber, ExpirationDate} from '../type/Card';
import {useNavigate} from 'react-router';
import PATH from '../router/path';
import useCardForm from '../hooks/useCardForm';
import useErrors from '../hooks/useErrors';

const INIT_CARD_NUMBER = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const INIT_EXPIRATION_DATE = {
  month: '',
  year: '',
};

const Main = () => {
  const {formData, onChange} = useCardForm({
    cardNumber: INIT_CARD_NUMBER,
    expirationDate: INIT_EXPIRATION_DATE,
    cvcNumber: '',
    cardCompany: '',
    password: '',
  });
  const {isErrors, onError} = useErrors({
    cardNumber: false,
    expirationDate: false,
    cvcNumber: false,
    cardCompany: false,
    password: false,
  });
  const navigate = useNavigate();

  const isVisible = (section: keyof CardForm, maxLength: number) => {
    // 해당 섹션에 에러가 있을 경우
    if (isErrors[section]) {
      console.log('에러 있음');
      return false;
    }

    if (typeof formData[section] === 'string') {
      return formData[section]?.length >= maxLength;
    }

    return Object.values(formData[section]).every(
      (value) => value?.length === maxLength
    );
  };

  return (
    <MainContainer>
      <Card
        cardNumbers={formData.cardNumber}
        expirationDate={formData.expirationDate}
        cardCompany={formData.cardCompany}
      />

      {isVisible('cvcNumber', 3) && (
        <PasswordSection
          value={formData.password}
          onChange={onChange}
          onError={onError}
        />
      )}

      {isVisible('expirationDate', 2) && (
        <CardCvcSection
          value={formData.cvcNumber}
          onChange={onChange}
          onError={onError}
        />
      )}

      {isVisible('cardCompany', 1) && (
        <ExpirationDateSection
          value={formData.expirationDate}
          onChange={onChange}
          onError={onError}
        />
      )}

      {isVisible('cardNumber', 4) && (
        <CardCompanySection onChange={onChange} name="cardCompany" />
      )}

      <CardNumberSection
        value={formData.cardNumber}
        onChange={onChange}
        onError={onError}
      />

      {isVisible('password', 2) && (
        <Button
          onClick={() =>
            navigate(PATH.CONFIRM, {
              state: {
                firstSection: formData.cardNumber.first,
                cardCompany: formData.cardCompany,
              },
            })
          }
        >
          확인
        </Button>
      )}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 376px;
  padding: 77px 30px 20px;
  margin: auto;
`;
