import './App.css';
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
    <>
      <CardPreview
        cardNumbers={cardInfo.cardNumbers}
        expirationDate={cardInfo.expirationDate}
        ownerName={cardInfo.ownerName}
      />
      <CardNumberInput setCardData={setCardData} />
      <ExpirationDateInput setCardData={setCardData} />
      <OwnerNameInput setCardData={setCardData} />
    </>
  );
}

export default App;
