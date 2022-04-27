import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * className of FormInput
   */
  className: PropTypes.string,
  /**
   * name of FormInput
   */
  inputTitle: PropTypes.string.isRequired,
  /**
   * information of input tags in FormInput
   */
  inputInfoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      className: PropTypes.string,
    }),
  ).isRequired,
};

const defaultProps = {
  className: '',
};

// component
const FormInput = ({ className, inputTitle, inputInfoList }) => {
  return (
    <div className="input-container">
      <label>{inputTitle}</label>
      <div className={`input-box ${className}`}>
        {inputInfoList.map(({ id, type, className = '', placeholder = '' }) => (
          <input
            key={id}
            type={type}
            className={`input-basic ${className}`}
            placeholder={placeholder}
          />
        ))}
      </div>
    </div>
  );
};

FormInput.defaultProps = defaultProps;
FormInput.propTypes = propTypes;

export default FormInput;
