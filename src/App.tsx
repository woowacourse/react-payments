import './App.css';
import Preview from './features/preview/ui/Preview';
import CardInfoContainer from './features/cardInfo/ui/CardInfoContainer';
import useCardInfo from './features/cardInfo/hooks/useCardInfo';

function App() {
  const { cardInfo, handleCardInfoChange } = useCardInfo();

  return (
    <div className="app-container">
      <main className="card-container">
        <Preview cardInfo={cardInfo} />
        <CardInfoContainer onChange={handleCardInfoChange} />
      </main>
    </div>
  );
}

export default App;
