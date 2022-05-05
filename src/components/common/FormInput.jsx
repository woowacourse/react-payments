import PropTypes from 'prop-types';

import useInputAutoFocus from 'hooks/useInputAutoFocus';
import { isObject } from 'utils';

const FormInput = ({
  className,
  type,
  inputTitle,
  inputInfoList,
  inputValue,
  theme,
  maxLength,
  handleChange,
  children,
}) => {
  const { inputRefList, autoFocusForward } = useInputAutoFocus({
    maxLength,
  });

  const handleInputChange = (e) => {
    handleChange(e, type);
    autoFocusForward(e);
  };

  return (
    <div className="input-container">
      <label className="input-title">{inputTitle}</label>
      <div className={`input-box ${className}`}>
        {inputInfoList.map(({ id, name, className = '', ...rest }, index) => (
          <input
            key={id}
            name={name}
            className={`input-basic ${className} font-${theme}`}
            value={isObject(inputValue) ? inputValue[name] : inputValue}
            onChange={handleInputChange}
            maxLength={maxLength}
            ref={(el) => (inputRefList.current[index] = el)}
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
  type: PropTypes.string.isRequired,
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
