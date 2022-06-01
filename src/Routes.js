import { useEffect } from 'react';
import { usePageContext } from 'contexts/PageContext';

import CardUpdated from 'pages/CardUpdated';
import CardEditor from 'pages/CardEditor';
import CardList from 'pages/CardList';

import { APP_NAME, PAGE_LIST } from 'constants';

function Routes() {
  const { pageTitle, pageLocation } = usePageContext();

  useEffect(() => {
    document.querySelector('title').textContent = pageTitle
      ? `${pageTitle} - ${APP_NAME}`
      : APP_NAME;
  }, [pageTitle]);

  return (
    <>
      {(pageLocation === PAGE_LIST.CARD_EDITOR && <CardEditor />) ||
        (pageLocation === PAGE_LIST.CARD_UPDATED && <CardUpdated />) ||
        (pageLocation === PAGE_LIST.CARD_LIST && <CardList />)}
    </>
  );
}

export default Routes;
