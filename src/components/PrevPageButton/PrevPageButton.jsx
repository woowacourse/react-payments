import { PAGES } from 'constants';

function PrevPageButton({ setPage, page }) {
  const handleClick = () => {
    setPage(PAGES.LIST);
  };

  return <div className="prev-page-button" onClick={handleClick} />;
}

export default PrevPageButton;
