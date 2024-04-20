import './index.css';
import styles from './App.module.css';

import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import ExpirationDateInput from './components/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from './components/OwnerNameInput/OwnerNameInput';
import CardPreview from './components/CardPreview/CardPreview';
import { useState } from 'react';

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumbers: ['', '', '', ''],
    expirationDate: ['', ''],
    ownerName: '',
  });

  const setCardData = (
    key: keyof CardInfo,
    newData: CardInfo[keyof CardInfo]
  ) => {
    setCardInfo({ ...cardInfo, [key]: newData });
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>카드 추가</h1>

      <CardPreview
        cardNumbers={cardInfo.cardNumbers}
        expirationDate={cardInfo.expirationDate}
        ownerName={cardInfo.ownerName}
      />

      <form>
        <CardNumberInput setCardData={setCardData} />
        <ExpirationDateInput setCardData={setCardData} />
        <OwnerNameInput setCardData={setCardData} />
      </form>
    </div>
  );
}

export default App;
