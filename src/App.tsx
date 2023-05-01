import { Outlet } from 'react-router-dom';
import { CardListProvider } from './context/CardListContext';
import GlobalStyle from './styles/global';
import PaymentsHeader from './components/payments/PaymentsHeader';

function App() {
  return (
    <CardListProvider>
      <GlobalStyle />
      <PaymentsHeader />
      <Outlet />
    </CardListProvider>
  );
}

export default App;
