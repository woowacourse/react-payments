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
  /**
   * card company name
   */
  company: PropTypes.string.isRequired,
  /**
   * handle clicking card company component
   */
  onClickCompany: PropTypes.func.isRequired,
  /**
   * theme of CardCompany
   */
  theme: PropTypes.string.isRequired,
};

export default CardCompany;
