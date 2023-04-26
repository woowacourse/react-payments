import { Outlet } from 'react-router-dom';
import Layout from './components/@common/Layout';
import { CreditCardProvider } from './contexts/CreditCardContext';

const App = () => {
  return (
    <>
      <Layout>
        <CreditCardProvider>
          <Outlet></Outlet>
        </CreditCardProvider>
      </Layout>
    </>
  );
};

export default App;
