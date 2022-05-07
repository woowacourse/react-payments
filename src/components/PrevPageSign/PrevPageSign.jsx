import { useContext } from 'react';
import { CardInfoContext } from 'App';

import { PAGE } from 'constants';

function PrevPageSign() {
  const { setPage } = useContext(CardInfoContext);

  const handleClick = () => {
    setPage(PAGE.LIST);
  };

  return <div className="prev-page-sign" onClick={handleClick} />;
}

export default PrevPageSign;
