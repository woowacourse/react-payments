import { memo } from 'react';
import PropTypes from 'prop-types';
import { isObject } from 'utils';
import styles from 'css/module/FormInput.module.css';

const FormInput = ({
  className,
  item,
  inputTitle,
  inputInfoList,
  inputValue,
  theme,
  onChange,
  children,
}) => {
  const handleChange = (e) => onChange(e, item);

  return (
    <div className={styles.container}>
      <label className={styles.title}>{inputTitle}</label>
      <div className={`${styles.inputContainer} ${className}`}>
        {inputInfoList.map(({ name, className = '', ...rest }, index) => (
          <input
            key={index}
            name={name}
            className={`input-basic ${className} font-${theme}`}
            value={isObject(inputValue) ? inputValue[name] : inputValue}
            onChange={handleChange}
            {...rest}
          />
        ))}
        {children}
      </div>
    </div>
  );
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
   * theme of FormInput according to card company
   */
  theme: PropTypes.string,
  /**
   * handle change event of input tag
   */
  onChange: PropTypes.func,
  /**
   * child element of FormInput for details
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

FormInput.defaultProps = {
  className: '',
  theme: '',
};

export default memo(FormInput);
