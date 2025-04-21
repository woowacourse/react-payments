import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import CardNumberInputs from './components/CardNumberInputs';
import ExpirationPeriodInputs from './components/ExpirationPeriodInputs';
import CVCNumberInput from './components/CVCNumberInput';
import Preview from './components/Preview';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

const App = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [period, setPeriod] = useState<string[]>(['', '']);
  const [cvcNumbers, setCvcNumbers] = useState<string[]>(['']);
  const [isPeriodSeparatorShowing, setIsPeriodSeparatorShowing] =
    useState<boolean>(false);

  const showPeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(true);
  }, []);

  const hidePeriodSeparator = useCallback(() => {
    setIsPeriodSeparatorShowing(period.some((p) => p !== ''));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Preview
          cardNumbers={cardNumbers}
          period={period}
          isPeriodSeparatorShowing={isPeriodSeparatorShowing}
        />

        <CardNumberInputs
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <ExpirationPeriodInputs
          period={period}
          setPeriod={setPeriod}
          showPeriodSeparator={showPeriodSeparator}
          hidePeriodSeparator={hidePeriodSeparator}
        />
        <CVCNumberInput cvcNumbers={cvcNumbers} setCvcNumbers={setCvcNumbers} />
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
