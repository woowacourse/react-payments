import { PageContextProvider } from 'contexts/PageContext';
import { CardDataContextProvider } from 'contexts/CardDataContext';

import Layout from 'components/Layout';
import Routes from 'Routes';

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

function ContextWrap() {
  return (
    <PageContextProvider>
      <CardDataContextProvider>
        <App />
      </CardDataContextProvider>
    </PageContextProvider>
  );
}

export default ContextWrap;
