import './App.css';
import Preview from './features/preview/ui/Preview';
import CardInfoContainer from './features/cardInfo/ui/CardInfoContainer';
import useCardInfo from './features/cardInfo/hooks/useCardInfo';

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
