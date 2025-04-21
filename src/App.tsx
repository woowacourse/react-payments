import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import CardNumbers from './components/CardNumbers';
import ExpirationPeriod from './components/ExpirationPeriod';
import CVCNumbers from './components/CVCNumbers';
import Preview from './components/Preview';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

const App = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [period, setPeriod] = useState<string[]>(['', '']);
  const [cvcNumbers, setCvcNumbers] = useState<string[]>(['']);
  const separatorRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Preview
          cardNumbers={cardNumbers}
          period={period}
          separatorRef={separatorRef}
        />
        <CardNumbers
          cardNumbers={cardNumbers}
          setCardNumbers={setCardNumbers}
        />
        <ExpirationPeriod
          period={period}
          setPeriod={setPeriod}
          separatorRef={separatorRef}
        />
        <CVCNumbers cvcNumbers={cvcNumbers} setCvcNumbers={setCvcNumbers} />
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
