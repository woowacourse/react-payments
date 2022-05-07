import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { PAGES } from 'constants';

function PrevPageSign() {
  const { setPage } = useContext(CardInfoContext);

  const handleClick = () => {
    setPage(PAGES.LIST);
  };

  return <div className="prev-page-sign" onClick={handleClick} />;
}

export default PrevPageSign;
