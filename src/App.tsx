import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Card from './component/Card/Card';
import CardNumberInput from './component/CardNumberInput/CardNumberInput';
import CardPeriodInput from './component/CardPeriod/CardPeriodInput';
import { appLayout, mainLayout } from './App.style';
import { ChangeEvent, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import CardCVCInput from './component/CardCVCInput/CardCVCInput';

type CardNumber = {
  first: number | null;
  second: number | null;
  third: number | null;
  forth: number | null;
};

type CardNumberError = {
  first: boolean;
  second: boolean;
  third: boolean;
  forth: boolean;
};

type CardExpirationDateError = {
  month: boolean;
  year: boolean;
};

function App() {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    first: null,
    second: null,
    third: null,
    forth: null,
  });

  const [cardNumberError, setCardNumberError] = useState<CardNumberError>({
    first: false,
    second: false,
    third: false,
    forth: false,
  });

  const [cardExpirationDate, setCardExpirationDate] = useState({
    month: '',
    year: '',
  });

  const [cardExpirationDateError, setCardExpirationDateError] =
    useState<CardExpirationDateError>({
      month: false,
      year: false,
    });

  const [cardCVC, setCardCVC] = useState<number | null>(null);

  const [cardCVCError, setCardCVCError] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isNumber = /^\d*$/.test(value);

    if (isNumber) {
      setCardNumber({
        ...cardNumber,
        [name]: value === '' ? null : Number(value),
      });
      setCardNumberError({
        ...cardNumberError,
        [name]: false,
      });
    } else {
      setCardNumberError({
        ...cardNumberError,
        [name]: true,
      });
    }
  };

  const handleExpirationDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isNumber = /^\d*$/.test(value);

    if (isNumber) {
      if (name === 'month' && value.length > 0) {
        const monthValue = Number(value);
        console.log('monthValue', monthValue);
        if (monthValue < 1 || monthValue > 12) {
          setCardExpirationDateError({
            ...cardExpirationDateError,
            month: true,
          });
          setCardExpirationDate({
            ...cardExpirationDate,
            month: value,
          });
          return;
        }
      } else if (name === 'year' && value.length > 0) {
        const yearValue = Number(value);
        console.log('yearValue', yearValue);
        if (yearValue < 25) {
          setCardExpirationDateError({
            ...cardExpirationDateError,
            year: true,
          });
          setCardExpirationDate({
            ...cardExpirationDate,
            year: value,
          });
          return;
        }
      }

      setCardExpirationDate({
        ...cardExpirationDate,
        [name]: value,
      });

      setCardExpirationDateError({
        ...cardExpirationDateError,
        [name]: false,
      });
    } else {
      setCardExpirationDateError({
        ...cardExpirationDateError,
        [name]: true,
      });
    }
  };

  const handleCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isNumber = /^\d*$/.test(value);

    if (isNumber) {
      setCardCVC(value === '' ? null : Number(value));
      setCardCVCError(false);
    } else {
      setCardCVCError(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={appLayout}>
          <Card
            cardNumber={cardNumber}
            cardExpirationDate={cardExpirationDate}
          />
          <main css={mainLayout}>
            <CardNumberInput
              cardNumber={cardNumber}
              onChange={handleInputChange}
              errorState={cardNumberError}
            />
            <CardPeriodInput
              cardExpirationDate={cardExpirationDate}
              onChange={handleExpirationDateChange}
              errorState={cardExpirationDateError}
            />
            <CardCVCInput
              cardCVC={cardCVC}
              onChange={handleCVCChange}
              hasError={cardCVCError}
            />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
