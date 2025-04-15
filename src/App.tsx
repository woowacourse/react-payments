import './App.css';
import Preview from './features/preview/ui/Preview';
import CardInfoContainer from './features/cardInfo/ui/CardInfoContainer';

function App() {
  return (
    <div className='app-container'>
      <main className='card-container'>
        <Preview />
        <CardInfoContainer />
      </main>
    </div>
  );
}

export default App;
