import PropTypes from 'prop-types';
import Styled from './InputBox.styles';
import Input from '../Input/Input';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';

const InputBox = ({
  id,
  labelText,
  placeholder,
  maxLength,
  hasLengthCounter,
  textAlign,
  type,
  onChange,
  onFocus,
  value,
  pattern,
  inputmode,
  required,
  readOnly,
  errorMessage,
  isError,
}) => (
  <Styled.Container isError={isError}>
    <Styled.Header>
      <label htmlFor={id}>{labelText}</label>
      {hasLengthCounter && (
        <span>
          {value.length} / {maxLength}
        </span>
      )}
    </Styled.Header>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      maxLength={maxLength}
      textAlign={textAlign}
      onChange={onChange}
      onFocus={onFocus}
      value={value}
      pattern={pattern}
      inputmode={inputmode}
      required={required}
      readOnly={readOnly}
    />
    <ErrorMessageBox errorMessage={errorMessage} />
  </Styled.Container>
);

InputBox.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  hasLengthCounter: PropTypes.bool,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  pattern: PropTypes.string,
  inputmode: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
};

InputBox.defaultProps = {
  labelText: '',
  placeholder: '',
  hasLengthCounter: false,
  textAlign: 'left',
  type: 'text',
  onChange: null,
  onFocus: null,
  value: '',
  errorMessage: '',
  isError: false,
  pattern: null,
  inputmode: '',
  required: false,
  readOnly: false,
};

export default InputBox;
