import './App.css';
import Preview from './features/preview/ui/Preview';
import CardInfoContainer from './features/cardInfo/ui/CardInfoContainer';
import { useState } from 'react';

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: ['', '', '', ''],
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
  });

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes('cardNumber')) {
      const index = Number(name[name.length - 1]);
      const updatedCardNumber = [...cardInfo.cardNumber];
      updatedCardNumber[index] = value;

      setCardInfo({
        ...cardInfo,
        cardNumber: updatedCardNumber,
      });
    } else if (name.includes('cardExpirationDate')) {
      const key = name.split('-')[1];
      const updatedCardExpirationDate = cardInfo.cardExpirationDate;
      if (key === 'month') {
        updatedCardExpirationDate.month = value;
      } else if (key === 'year') {
        updatedCardExpirationDate.year = value;
      }
      setCardInfo({
        ...cardInfo,
        cardExpirationDate: updatedCardExpirationDate,
      });
    } else {
      setCardInfo({
        ...cardInfo,
        [name]: value,
      });
    }
  };

  return (
    <div className='app-container'>
      <main className='card-container'>
        <Preview cardInfo={cardInfo} />
        <CardInfoContainer onChange={handleCardInfoChange} />
      </main>
    </div>
  );
}

export default App;
