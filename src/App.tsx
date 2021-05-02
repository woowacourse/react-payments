import GlobalStyle from './global.styles';
import { CardsStateProvider } from './context/CardsStateContext';
import AddCardPage from './pages/AddCardPage';
import CardListPage from './pages/CardListPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <CardsStateProvider>
          <CardListPage />
          {/* <AddCardPage /> */}
        </CardsStateProvider>
      </div>
    </>
  );
}

export default App;
