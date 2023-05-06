import { Outlet } from 'react-router-dom';
import { CardListProvider } from './context/CardListContext';
import PaymentsHeader from './components/payments/PaymentsHeader';
import Layout from './components/common/Layout';

function App() {
  return (
    <CardListProvider>
      <Layout>
        <PaymentsHeader />
        <Outlet />
      </Layout>
    </CardListProvider>
  );
}

export default App;
