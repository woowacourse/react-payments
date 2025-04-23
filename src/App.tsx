import './App.css';
import Preview from './widgets/preview/ui/Preview';
import useCardInfo from './features/cardInfo/hooks/useCardInfo';
import { CardInfoContainer } from './features/cardInfo/ui';

function App() {
  const { cardNumber, cardExpirationDate, handleCardInfoChange, error } = useCardInfo();

  return (
    <div className='app-container'>
      <main className='card-container'>
        <Preview cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
        <CardInfoContainer onChange={handleCardInfoChange} error={error} />
      </main>
    </div>
  );
}

export default App;
