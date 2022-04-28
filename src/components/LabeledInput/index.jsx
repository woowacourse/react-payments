import { useState } from 'react';
import Input from '../Input';
import InputLabel from '../InputLabel';
import {
  LabeledInputContainer,
  LabeledInputHeader,
  LabeledInputBody,
  LengthChecker,
  LabeledInputFooter,
} from '../../style/addForm';

function LabeledInput({
  value,
  handleInputChange,
  headerWidth,
  isShowLengthChecker,
  countInput,
  invalidMessage,
  inputProps,
  inputLabelProps,
}) {
  const [tempValue, setTempValue] = useState('');

  const onChange = ({ target }) => {
    setTempValue(target.value);
  };

  const isShowInvalidMessage = () => {
    if (countInput >= 2) {
      return inputProps.isValid || value.join('').length === 0;
    }

    return value
      ? inputProps.isValid || value.length === 0
      : inputProps.isValid || tempValue.length === 0;
  };

  return (
    <LabeledInputContainer>
      <LabeledInputHeader width={headerWidth}>
        <InputLabel {...inputLabelProps} />
        {isShowLengthChecker ? (
          <LengthChecker>
            <span>{value ? value.length : tempValue.length}</span> /{' '}
            <span>{inputProps.maxLength}</span>
          </LengthChecker>
        ) : (
          ''
        )}
      </LabeledInputHeader>
      <LabeledInputBody>
        {countInput >= 2 ? (
          Array.from({ length: countInput }).map((_, index) => (
            <Input
              key={index}
              value={value[index] || tempValue}
              onChange={event => {
                handleInputChange ? handleInputChange(event, index) : onChange(event);
              }}
              {...inputProps}
            />
          ))
        ) : (
          <Input
            value={value || tempValue}
            onChange={handleInputChange || onChange}
            {...inputProps}
          />
        )}
      </LabeledInputBody>
      <LabeledInputFooter>{isShowInvalidMessage() ? '' : invalidMessage}</LabeledInputFooter>
    </LabeledInputContainer>
  );
}

LabeledInput.defaultProps = {
  countInput: 1,
  isShowLengthChecker: false,
};

export default LabeledInput;
