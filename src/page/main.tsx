import styled from 'styled-components';
import {useState} from 'react';

import Card from '../components/card/Card';
import PasswordSection from '../components/form/PasswordSection';
import CardCompanySection from '../components/form/CardCompanySection';
import CardNumberSection from '../components/form/CardNumberSection';
import ExpirationDateSection from '../components/form/ExpirationDateSection';
import CardCvcSection from '../components/form/CardCvcSection';

import {CardCompany, CardNumber, ExpirationDate} from '../type/Card';
import {useNavigate} from 'react-router';
import PATH from '../router/path';
import Button from '../components/button/Button';
import useInput from '../hooks/useInput';

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
  const {formData, onChange} = useInput({
    cardNumber: INIT_CARD_NUMBER,
    expirationDate: INIT_EXPIRATION_DATE,
    cvcNumber: '',
    cardCompany: '',
    password: '',
  });

  const [errors, setErrors] = useState(false);

  const navigate = useNavigate();

  const isVisible = (
    section: CardNumber | CardCompany | ExpirationDate | string
  ) => {
    if (typeof section === 'string') {
      return section !== '';
    }
    return !Object.values(section).some((value) => value === '');
  };

  return (
    <MainContainer>
      <Card
        cardNumbers={formData.cardNumber}
        expirationDate={formData.expirationDate}
        cardCompany={formData.cardCompany}
      />

      {isVisible(formData.cvcNumber) && (
        <PasswordSection value={formData.password} onChange={onChange} />
      )}

      {isVisible(formData.expirationDate) && (
        <CardCvcSection value={formData.cvcNumber} onChange={onChange} />
      )}

      {isVisible(formData.cardCompany) && (
        <ExpirationDateSection
          value={formData.expirationDate}
          onChange={onChange}
        />
      )}

      {!errors && isVisible(formData.cardNumber) && (
        <CardCompanySection onChange={onChange} name="cardCompany" />
      )}

      <CardNumberSection
        value={formData.cardNumber}
        onChange={onChange}
        onError={(isError: boolean) => setErrors(isError)}
      />

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
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  width: 376px;
  padding: 77px 30px 20px;
  margin: auto;
`;
