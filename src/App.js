import { useEffect } from 'react';
import { usePageContext } from 'contexts/PageContext';
import { CardDataContextProvider } from 'contexts/CardDataContext';

import CardUpdated from 'pages/CardUpdated';
import CardEditor from 'pages/CardEditor';
import CardList from 'pages/CardList';
import Layout from 'components/Layout';

import { APP_NAME, PAGE_LIST } from 'constants';

function App() {
  const { pageTitle, pageLocation } = usePageContext();

  useEffect(() => {
    document.querySelector('title').textContent = pageTitle
      ? `${pageTitle} - ${APP_NAME}`
      : APP_NAME;
  }, [pageTitle]);

  return (
    <Layout>
      {(pageLocation === PAGE_LIST.CARD_EDITOR && <CardEditor />) ||
        (pageLocation === PAGE_LIST.CARD_UPDATED && <CardUpdated />) ||
        (pageLocation === PAGE_LIST.CARD_LIST && <CardList />)}
    </Layout>
  );
}

function ContextWrap() {
  return (
    <CardDataContextProvider>
      <App />
    </CardDataContextProvider>
  );
}

export default ContextWrap;
