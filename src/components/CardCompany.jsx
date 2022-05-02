import PropTypes from 'prop-types';
import Circle from './common/Circle';

const CardCompany = ({ company, handleClickCompany, theme }) => {
  return (
    <div className="modal-item-container" onClick={() => handleClickCompany(company, theme)}>
      <Circle theme={theme} />
      <span className="modal-item-name">{company}</span>
    </div>
  );
};

CardCompany.propTypes = {
  company: PropTypes.string,
  handleClickCompany: PropTypes.func,
  theme: PropTypes.string,
};

export default CardCompany;
