import { useState } from 'react';
import { CARD_COMPANY_NAME } from '../components/constants/cardCompany';
import styled from '@emotion/styled';
import CardForm from '../components/cardInfoForm/CardForm/CardForm';
import CardPreview from '../components/CardPreview/CardPreview';

function Home() {
  const [cardNumber, setCardNumber] = useState({
    value: ['', '', '', ''],
    isErrors: [false, false, false, false],
    errorMessage: '',
  });
  const [cardCompany, setCardCompany] = useState<
    keyof typeof CARD_COMPANY_NAME | undefined
  >();
  const [cardValidityPeriod, setCardValidityPeriod] = useState({
    value: { month: '', year: '' },
    isError: { month: false, year: false },
    errorMessage: '',
  });
  const [cardCVC, setCardCVC] = useState({
    value: '',
    isError: false,
    errorMessage: '',
  });
  const [cardPassword, setCardPassword] = useState({
    value: '',
    isError: false,
    errorMessage: '',
  });

  const isCardCompany = (v: string): v is keyof typeof CARD_COMPANY_NAME => {
    return v in CARD_COMPANY_NAME;
  };

  const handleChangeCardCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (isCardCompany(value)) {
      setCardCompany(value);
    }
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
        cardNumber={cardNumber.value}
        cardValidityPeriod={cardValidityPeriod.value}
        cardCompany={cardCompany}
      />
      <CardForm
        {...cardInfo}
        setCardNumber={setCardNumber}
        handleChangeCardCompany={handleChangeCardCompany}
        setCardValidityPeriod={setCardValidityPeriod}
        setCardCVC={setCardCVC}
        setCardPassword={setCardPassword}
      />
    </AppLayout>
  );
}

export default Home;

const AppLayout = styled.main`
  width: 376px;
  height: 100%;
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 70px 30px;
`;
