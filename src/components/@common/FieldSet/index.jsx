import PropTypes from 'prop-types';

function FieldSet({ title, children }) {
  return (
    <div className="input-container">
      <span className="input-title">{title}</span>
      <div className="input-box">{children}</div>
    </div>
  );
}

FieldSet.defaultProps = {
  title: '',
};

FieldSet.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default FieldSet;
