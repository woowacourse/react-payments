function PrevPageButton({ setPage }) {
  const handleClick = () => {
    setPage('listPage');
  };

  return <div className="prev-page-button" onClick={handleClick}></div>;
}

export default PrevPageButton;
