import styled from 'styled-components';

import PasswordSection from '../components/form/PasswordSection';
import CardCompanySection from '../components/form/CardCompanySection';
import CardNumberSection from '../components/form/CardNumberSection';
import ExpirationDateSection from '../components/form/ExpirationDateSection';
import CardCvcSection from '../components/form/CardCvcSection';
import Button from '../components/button/Button';
import CardPreview from '../components/cardPreview/CardPreview';

import {CardForm} from '../type/Card';
import {useNavigate} from 'react-router';
import PATH from '../router/path';
import useInput from '../hooks/useInput';
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

const INIT_FORM_DATA = {
  cardNumber: INIT_CARD_NUMBER,
  expirationDate: INIT_EXPIRATION_DATE,
  cvcNumber: '',
  cardCompany: '',
  password: '',
};

const Main = () => {
  const {formData, onChange} = useInput({
    cardNumber: INIT_CARD_NUMBER,
    expirationDate: INIT_EXPIRATION_DATE,
    cvcNumber: '',
    cardCompany: '',
    password: '',
  });
  const {isErrors, errorMessages, onValidate, onFocusout} = useErrors(
    {
      cardNumber: false,
      expirationDate: false,
      cvcNumber: false,
      cardCompany: false,
      password: false,
    },
    INIT_FORM_DATA
  );

  const navigate = useNavigate();

  const isVisible = (section: keyof CardForm, maxLength: number) => {
    if (isErrors[section]) return false;

    if (typeof formData[section] === 'string') {
      return formData[section]?.length >= maxLength;
    }

    return Object.values(formData[section]).every(
      (value) => value?.length === maxLength
    );
  };

  return (
    <MainContainer>
      <CardPreview
        cardNumbers={formData.cardNumber}
        expirationDate={formData.expirationDate}
        cardCompany={formData.cardCompany}
      />

      {isVisible('cvcNumber', 3) && (
        <PasswordSection
          value={formData.password}
          onChange={onChange}
          onValidate={onValidate}
          onFocusout={onFocusout}
          errorMessage={errorMessages.password}
        />
      )}

      {isVisible('expirationDate', 2) && (
        <CardCvcSection
          value={formData.cvcNumber}
          onChange={onChange}
          onValidate={onValidate}
          onFocusout={onFocusout}
          errorMessage={errorMessages.cvcNumber}
        />
      )}

      {isVisible('cardCompany', 1) && (
        <ExpirationDateSection
          value={formData.expirationDate}
          onChange={onChange}
          onValidate={onValidate}
          onFocusout={onFocusout}
          errorMessage={errorMessages.expirationDate}
        />
      )}

      {isVisible('cardNumber', 4) && (
        <CardCompanySection onChange={onChange} name="cardCompany" />
      )}

      <CardNumberSection
        value={formData.cardNumber}
        onChange={onChange}
        onValidate={onValidate}
        onFocusout={onFocusout}
        errorMessage={errorMessages.cardNumber}
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
