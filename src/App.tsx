import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import NumberInputs from './components/NumberInputs';
import ExpirationPeriodInputs from './components/ExpirationPeriodInputs';
import CVCNumberInput from './components/CVCNumberInput';
import Preview from './components/Preview';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import BrandSelect from './components/BrandSelect';
import PasswordInput from './components/PasswordInput';

const App = () => {
  const [numbers, setNumbers] = useState<string[]>(['', '', '', '']);
  const [period, setPeriod] = useState<string[]>(['', '']);
  const [brand, setBrand] = useState<string>('');
  const [isPeriodSeparatorShowing, setIsPeriodSeparatorShowing] =
    useState<boolean>(false);

  const showPeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(true);
  }, []);

  const hidePeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(period.some((p) => p !== ''));
  }, []);

  const handleNumbersChange = useCallback((newNumbers: string[]) => {
    setNumbers(newNumbers);
  }, []);

  const handlePeriodChange = useCallback((newPeriod: string[]) => {
    setPeriod(newPeriod);
  }, []);

  const handleBrandChange = useCallback((newBrand: string) => {
    setBrand(newBrand);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Preview
          numbers={numbers}
          period={period}
          brand={brand}
          isPeriodSeparatorShowing={isPeriodSeparatorShowing}
        />

        <PasswordInput />
        <CVCNumberInput />
        <ExpirationPeriodInputs
          period={period}
          handlePeriodChange={handlePeriodChange}
          showPeriodSeparator={showPeriodSeparator}
          hidePeriodSeparator={hidePeriodSeparator}
        />
        <BrandSelect brand={brand} handleBrandChange={handleBrandChange} />
        <NumberInputs
          numbers={numbers}
          handleNumbersChange={handleNumbersChange}
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
  overflow: auto;
`;
