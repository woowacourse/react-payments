import { Outlet } from 'react-router-dom';
import Layout from './components/@common/Layout';
import { CreditCardProvider } from './contexts/CreditCardContext';
import GlobalStyle from './styles/globalStyle';

const App = () => {
  return (
    <>
      <Layout>
        <CreditCardProvider>
          <GlobalStyle />
          <Outlet></Outlet>
        </CreditCardProvider>
      </Layout>
    </>
  );
};

export default App;
