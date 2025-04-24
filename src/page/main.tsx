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
  const [cvcNumber, setCvcNumber] = useState('');
  const [cardCompany, setCardCompany] = useState<CardCompany | ''>('');
  const [password, setPassword] = useState('');

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
        cardNumbers={cardNumber}
        expirationDate={expirationDate}
        cardCompany={cardCompany}
      />

      {isVisible(cvcNumber) && (
        <PasswordSection
          value={password}
          onChange={(value) => setPassword(value)}
        />
      )}

      {isVisible(expirationDate) && (
        <CardCvcSection
          value={cvcNumber}
          onChange={(value) => setCvcNumber(value)}
        />
      )}

      {isVisible(cardCompany) && (
        <ExpirationDateSection
          value={expirationDate}
          onChange={(order, value) =>
            setExpirationDate((prev) => ({
              ...prev,
              [order]: value,
            }))
          }
        />
      )}

      {/* 에러가 있을 경우 다음 섹션을 보여주지 않음 */}
      {!errors && isVisible(cardNumber) && (
        <CardCompanySection onChange={(value) => setCardCompany(value)} />
      )}

      <CardNumberSection
        value={cardNumber}
        onChange={(order, value) =>
          setCardNumber((prev) => ({
            ...prev,
            [order]: value,
          }))
        }
        onError={(isError: boolean) => setErrors(isError)}
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
