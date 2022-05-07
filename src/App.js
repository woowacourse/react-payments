import { usePageSetting } from 'contexts/PageContext';
import { CardListContextProvider } from 'contexts/CardListContext';
import { PAGE_LIST } from 'constants';

import Layout from 'components/Layout';

import CardUpdated from 'pages/CardUpdated';
import CardEditor from 'pages/CardEditor';

function App() {
  const { pageLocation } = usePageSetting();

  return (
    <Layout>
      {(pageLocation === PAGE_LIST.CARD_EDITOR && <CardEditor />) ||
        (pageLocation === PAGE_LIST.CARD_UPDATED && <CardUpdated />)}
    </Layout>
  );
}

function ContextWrap() {
  return (
    <CardListContextProvider>
      <App />
    </CardListContextProvider>
  );
}

export default ContextWrap;
