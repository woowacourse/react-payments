import { Outlet } from 'react-router-dom';
import { CardListProvider } from './context/CardContext';
import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <CardListProvider>
      <GlobalStyle />
      <Header />
      <Outlet />
    </CardListProvider>
  );
}

export default App;
