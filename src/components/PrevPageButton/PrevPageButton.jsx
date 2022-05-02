function PrevPageButton({ setPage }) {
  const handlePrevPageButtonClick = () => {
    setPage('listPage');
  };

  return <div className="prev-page-button" onClick={handlePrevPageButtonClick}></div>;
}

export default PrevPageButton;
