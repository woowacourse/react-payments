import GlobalStyle from './global.styles';
import { CardsStateProvider } from './context/CardContext';
import AddCardPage from './pages/AddCardPage';
import CardListPage from './pages/CardListPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CardsStateProvider>
          <CardListPage />
        </CardsStateProvider>
      </div>
    </>
  );
}

export default App;
