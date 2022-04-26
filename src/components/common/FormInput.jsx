import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ inputTitle, inputInfoList, className = '' }) => {
  return (
    <div className="input-container">
      <label>{inputTitle}</label>
      <div className={`input-box ${className}`}>
        {inputInfoList.map(({ type, placeholder = '', id, className = '' }) => (
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

FormInput.propTypes = {
  inputTitle: PropTypes.string.isRequired,
  inputInfoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      className: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
};

export default FormInput;
