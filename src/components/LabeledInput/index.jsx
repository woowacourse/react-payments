import PropTypes from 'prop-types';
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
  const isValidInput = () => {
    if (isMultipleInput(countInput)) {
      return inputProps.isValid || value.join('').length === 0;
    }

    return inputProps.isValid || value.length === 0;
  };

  const isMultipleInput = countInput => {
    return countInput >= 2;
  };

  return (
    <LabeledInputContainer>
      <LabeledInputHeader width={headerWidth}>
        <InputLabel {...inputLabelProps} />
        {isShowLengthChecker ? (
          <LengthChecker>
            <span>{value.length}</span> / <span>{inputProps.maxLength}</span>
          </LengthChecker>
        ) : (
          ''
        )}
      </LabeledInputHeader>
      <LabeledInputBody>
        {isMultipleInput(countInput) ? (
          Array.from({ length: countInput }).map((_, index) => (
            <Input
              key={index}
              value={value[index]}
              onChange={event => {
                handleInputChange(event, index);
              }}
              {...inputProps}
            />
          ))
        ) : (
          <Input value={value} onChange={handleInputChange} {...inputProps} />
        )}
      </LabeledInputBody>
      <LabeledInputFooter>{isValidInput() ? '' : invalidMessage}</LabeledInputFooter>
    </LabeledInputContainer>
  );
}

LabeledInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

LabeledInput.defaultProps = {
  countInput: 1,
  isShowLengthChecker: false,
};

export default LabeledInput;
