import { PAGES } from 'constants';

function PrevPageSign({ setPage }) {
  const handleClick = () => {
    setPage(PAGES.LIST);
  };

  return <div className="prev-page-sign" onClick={handleClick} />;
}

export default PrevPageSign;
