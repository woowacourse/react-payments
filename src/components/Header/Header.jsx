import { useContext } from 'react';
import { CardInfoContext } from 'App';
import { PAGES } from 'constants';

function Header({ children }) {
  const { state, page } = useContext(CardInfoContext);

  const { inputValid } = state;

  return (
    <header className={` ${inputValid && page !== PAGES.LIST ? 'mt-30 mb-10' : ''}`}>
      {children}
    </header>
  );
}

export default Header;
