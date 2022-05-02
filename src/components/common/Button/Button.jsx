import PropTypes from 'prop-types';

function Button({ text }) {
  return (
    <div className="button-box">
      <button type="submit" className="button-style">
        {text}
      </button>
    </div>
  );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
