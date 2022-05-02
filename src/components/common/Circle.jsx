import PropTypes from 'prop-types';

const Circle = ({ theme }) => {
  return <div className={`modal-item-dot bg-${theme}`}></div>;
};

Circle.propTypes = {
  theme: PropTypes.string,
};

export default Circle;
