import PropTypes from 'prop-types';

function CardCompany({ handleCompany, company, theme }) {
  return (
    <div className="modal-item-container" onClick={() => handleCompany(company, theme)}>
      <div className={`modal-item-dot bg-${theme}`} />
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
