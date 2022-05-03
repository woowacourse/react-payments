import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from '../Input';
import InputLabel from '../InputLabel';

const LabeledInputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 7px;
`;

const LabeledInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.width || '100%'};
`;

const LabeledInputBody = styled.div`
  display: flex;
  gap: 4px;
`;

const LengthChecker = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.05em;
  color: #525252;
`;

const LabeledInputFooter = styled.span`
  position: absolute;
  word-break: normal;
  bottom: -14px;
  width: 300px;
  overflow: visible;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: red;
`;

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
