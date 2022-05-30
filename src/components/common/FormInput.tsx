import PropTypes from 'prop-types';
import useInputAutoFocus from 'hooks/useInputAutoFocus';
import { isObject } from 'utils';
import { useContext } from 'react';
import { CardInfoContext, CardInfoContextValue } from 'context/cardInfoProvider';

interface FormInputProps {
  className: string;
  type: string;
  inputTitle: string;
  inputInfoList: any[];
  maxLength: number;
  handleChange: (e: any, type: string) => void;
  children?: React.ReactNode;
}

const FormInput = ({
  className,
  type,
  inputTitle,
  inputInfoList,
  maxLength,
  handleChange,
  children,
}: FormInputProps) => {
  const { cardInfo } = useContext(CardInfoContext) as CardInfoContextValue;
  const inputValue = cardInfo[type];
  const theme = cardInfo['theme'];

  const { inputRefList, autoFocusForward } = useInputAutoFocus({
    maxLength,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLElement>) => {
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
