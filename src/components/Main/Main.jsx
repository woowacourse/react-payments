import { useContext } from 'react';
import { CardInfoContext } from 'contexts/CardInfoContextProvider';
import { PAGES } from 'constants';

function Main({ children }) {
  const { page } = useContext(CardInfoContext);

  return <main className={`${page === PAGES.LIST ? 'main-scroll' : ''}`}>{children}</main>;
}

export default Main;
