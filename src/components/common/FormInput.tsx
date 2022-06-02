import { useContext } from 'react';
import useInputAutoFocus from 'hooks/useInputAutoFocus';
import { CardInfoContext, CardInfoContextValue } from 'context/cardInfoProvider';
import { CardInfoKey } from 'types';
import { InputInfo } from 'page/cardAddUpdate/data';

interface FormInputProps {
  className: string;
  type: CardInfoKey;
  inputTitle: string;
  inputInfoList: InputInfo[];
  maxLength: number;
  handleChange: (e: React.ChangeEvent<HTMLElement>, type: string) => void;
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
            value={
              typeof inputValue !== 'string' && name !== undefined ? inputValue[name] : inputValue
            }
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

export default FormInput;
