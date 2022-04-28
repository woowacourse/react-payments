import PropTypes from 'prop-types';

function FieldSet({ title, errorMessage, inputWidth, children }) {
  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      <div className="input-box" style={{ width: `${inputWidth}%` }}>
        {children}
      </div>
      <p className="input-error-message">{errorMessage}</p>
    </div>
  );
}

FieldSet.defaultProps = {
  title: '',
  errorMessage: '',
  inputWidth: 100,
};

FieldSet.propTypes = {
  title: PropTypes.string,
  errorMessage: PropTypes.string,
  inputWidth: PropTypes.number,
};

export default FieldSet;
