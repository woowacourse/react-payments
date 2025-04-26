import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import CardNumberInputs from './components/CardNumberInputs';
import ExpirationPeriodInputs from './components/ExpirationPeriodInputs';
import CVCNumberInput from './components/CVCNumberInput';
import Preview from './components/Preview';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import CardBrandSelect from './components/CardBrandSelect';

const App = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [period, setPeriod] = useState<string[]>(['', '']);
  const [cardBrand, setCardBrand] = useState<string>('');
  const [isPeriodSeparatorShowing, setIsPeriodSeparatorShowing] =
    useState<boolean>(false);

  const showPeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(true);
  }, []);

  const hidePeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(period.some((p) => p !== ''));
  }, []);

  const handleCardNumbersChange = useCallback((newCardNumbers: string[]) => {
    setCardNumbers(newCardNumbers);
  }, []);

  const handlePeriodChange = useCallback((newPeriod: string[]) => {
    setPeriod(newPeriod);
  }, []);

  const handleCardBrandChange = useCallback((newCardBrand: string) => {
    setCardBrand(newCardBrand);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Preview
          cardNumbers={cardNumbers}
          period={period}
          cardBrand={cardBrand}
          isPeriodSeparatorShowing={isPeriodSeparatorShowing}
        />

        <CVCNumberInput />
        <ExpirationPeriodInputs
          period={period}
          handlePeriodChange={handlePeriodChange}
          showPeriodSeparator={showPeriodSeparator}
          hidePeriodSeparator={hidePeriodSeparator}
        />
        <CardBrandSelect
          cardBrand={cardBrand}
          handleCardBrandChange={handleCardBrandChange}
        />
        <CardNumberInputs
          cardNumbers={cardNumbers}
          handleCardNumbersChange={handleCardNumbersChange}
        />
      </Main>
    </ThemeProvider>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 28px 0;
  margin: 0 auto;
  width: 376px;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 24px;
`;
