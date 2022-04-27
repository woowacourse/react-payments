const CardCompany = ({ company, onClickCompany, theme }) => {
  return (
    <div className="modal-item-container" onClick={() => onClickCompany(company, theme)}>
      <div className="modal-item-dot" style={{ backgroundColor: theme }}></div>
      <span className="modal-item-name">{company}</span>
    </div>
  );
};

export default CardCompany;
