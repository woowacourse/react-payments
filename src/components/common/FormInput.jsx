import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { isObject } from 'utils';

const FormInput = ({
  className,
  item,
  inputTitle,
  inputInfoList,
  inputValue,
  theme,
  handleChange,
  children,
}) => {
  const handleInputChange = useCallback((e) => handleChange(e, item), [handleChange, item]);

  return (
    <div className="input-container">
      <label className="input-title">{inputTitle}</label>
      <div className={`input-box ${className}`}>
        {inputInfoList.map(({ id, name, className = '', ...rest }) => (
          <input
            key={id}
            name={name}
            className={`input-basic ${className} font-${theme}`}
            value={isObject(inputValue) ? inputValue[name] : inputValue}
            onChange={handleInputChange}
            {...rest}
          />
        ))}
        {children}
      </div>
    </div>
  );
};

FormInput.defaultProps = {
  className: '',
  cardInfo: {},
  handleChange: undefined,
};

FormInput.propTypes = {
  /**
   * className of FormInput
   */
  className: PropTypes.string,
  /**
   * category of FormInput
   */
  item: PropTypes.string.isRequired,
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
      name: PropTypes.string,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      className: PropTypes.string,
    }),
  ).isRequired,
  /**
   * card information for input value
   */
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * handle change event of input tag
   */
  handleChange: PropTypes.func,
};

export default FormInput;
