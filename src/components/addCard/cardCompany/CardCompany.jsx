import PropTypes from 'prop-types';

function CardCompany({ handleCompany, company, theme }) {
  return (
    <div className="modal-item-container">
      <div className={`modal-item-dot bg-${theme}`} onClick={() => handleCompany(company, theme)} />
      <span className="modal-item-name">{company}</span>
    </div>
  );
}

CardCompany.propTypes = {
  handleCompany: PropTypes.func.isRequired,
  company: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

export default CardCompany;
