import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import CardNumbers from './components/CardNumbers';
import ExpirationPeriod from './components/ExpirationPeriod';
import CVCNumbers from './components/CVCNumbers';
import Preview from './components/Preview';

const App: React.FC = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(['', '', '', '']);
  const [period, setPeriod] = useState<string[]>(['', '']);
  const separatorRef = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <Preview
        cardNumbers={cardNumbers}
        period={period}
        separatorRef={separatorRef}
      />
      <CardNumbers cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />
      <ExpirationPeriod
        period={period}
        setPeriod={setPeriod}
        separatorRef={separatorRef}
      />
      <CVCNumbers />
    </Main>
  );
};

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 43px 28px 0;
  margin: 0 auto;
  width: 376px;
  height: 100dvh;
  background-color: #f9f9f9;
  gap: 24px;
`;
