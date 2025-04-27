import { useState } from 'react';
import styled from '@emotion/styled';
import CardPreview from './components/CardPreview/CardPreview';
import CardForm from './components/cardInfoForm/CardForm/CardForm';
import { CARD_COMPANY_NAME } from './components/constants/cardCompany';

const VALIDITY_PERIOD = {
  MAX_LENGTH: 2,
};

export const CARD_IFNO_INPUT_STEP = {
  cardCompany: 'cardCompany',
  cvc: 'cvc',
  password: 'password',
} as const;

function App() {
  const [cardPassword, setCardPassword] = useState('');

  const handleChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > 2) return;

    setCardPassword(value);
  };

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const handleChangeCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    n: number,
  ) => {
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > 4) return;

    setCardNumber((prev) => {
      const newCardNumber = [...prev];
      newCardNumber[n] = value;
      return newCardNumber;
    });
  };

  const [cardCVC, setCardCVC] = useState('');
  const handleChangeCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > 3) return;

    setCardCVC(value);
  };

  const [cardCompany, setCardCompany] = useState<
    keyof typeof CARD_COMPANY_NAME | undefined
  >();

  const isCardCompany = (v: string): v is keyof typeof CARD_COMPANY_NAME => {
    return v in CARD_COMPANY_NAME;
  };

  const handleChangeCardCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (isCardCompany(value)) {
      setCardCompany(value);
    }
  };

  const [cardValidityPeriod, setCardValidityPeriod] = useState({
    month: '',
    year: '',
  });

  const handleChangeValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > VALIDITY_PERIOD.MAX_LENGTH) {
      return;
    }

    setCardValidityPeriod((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const cardInfo = {
    cardNumber,
    cardValidityPeriod,
    cardCompany,
    cardCVC,
    cardPassword,
  };

  return (
    <AppLayout>
      <CardPreview
        cardNumber={cardNumber}
        cardValidityPeriod={cardValidityPeriod}
        cardCompany={cardCompany}
      />
      <CardForm
        {...cardInfo}
        handleChangeCardNumber={handleChangeCardNumber}
        handleChangeCardCompany={handleChangeCardCompany}
        handleChangeValidityPeriod={handleChangeValidityPeriod}
        handleChangeCVC={handleChangeCVC}
        handleChangeCardPassword={handleChangeCardPassword}
      />
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.main`
  width: 376px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 70px 30px;
`;
