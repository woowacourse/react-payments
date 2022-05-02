import PropTypes from 'prop-types';

const CardCompany = ({ company, onClickCompany, theme }) => {
  return (
    <div className="modal-item-container" onClick={() => onClickCompany(company, theme)}>
      <div className={`modal-item-dot bg-${theme}`}></div>
      <span className="modal-item-name">{company}</span>
    </div>
  );
};

CardCompany.propTypes = {
  company: PropTypes.string,
  onClickCompany: PropTypes.func,
  theme: PropTypes.string,
};

export default CardCompany;
