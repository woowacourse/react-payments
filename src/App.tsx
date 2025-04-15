import { css } from '@emotion/css';
import './App.css';
import { AppLayout } from './components/common/AppLayout';
import { Card } from './components/features/Card';
import { useState } from 'react';

function App() {
  const [card, setCard] = useState({
    cardType: 'VISA',
    cardNumbers: [0, 0, 0, 0],
    expireDate: '',
  });
  return (
    <AppLayout>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 80px;
        `}
      >
        <Card type={'VISA'} cardNumbers={[1234, 1234, 1234, 1234]} expireDate={'04/12'} />
      </div>
    </AppLayout>
  );
}

export default App;
