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
  const [cardNumber, setCardNumber] = useState<CardNumber>(INIT_CARD_NUMBER);
  const [expirationDate, setExpirationDate] =
    useState<ExpirationDate>(INIT_EXPIRATION_DATE);
  const [cvcNumber, setcvcNumber] = useState('');
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  return (
    <MainContainer>
      <Card
        cardNumbers={cardNumber}
        expirationDate={expirationDate}
        cardCompany={cardCompany}
      />
      <PasswordSection
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <CardCompanySection onChange={(value) => setCardCompany(value)} />
      <CardNumberSection
        value={cardNumber}
        onChange={(order, value) =>
          setCardNumber((prev) => ({
            ...prev,
            [order]: value,
          }))
        }
      />
      <ExpirationDateSection
        value={expirationDate}
        onChange={(order, value) =>
          setExpirationDate((prev) => ({
            ...prev,
            [order]: value,
          }))
        }
      />
      <CardCvcSection
        value={cvcNumber}
        onChange={(value) => setcvcNumber(value)}
      />

      <Button
        onClick={() =>
          navigate(PATH.CONFIRM, {
            state: {
              firstSection: cardNumber.first,
              cardCompany: cardCompany,
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
