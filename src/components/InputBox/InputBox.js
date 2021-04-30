import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Styled from './InputBox.styles';
import Input from '../Input/Input';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';

const InputBox = ({
  labelText,
  placeholder,
  maxLength,
  hasLengthCounter,
  textAlign,
  type,
  onChange,
  value,
  pattern,
  inputMode,
  required,
  errorMessage,
  isError,
}) => {
  const [uniqueId] = useState(nanoid(10));

  return (
    <Styled.Container isError={isError}>
      <Styled.Header>
        <label htmlFor={uniqueId}>{labelText}</label>
        {hasLengthCounter && (
          <span>
            {value.length} / {maxLength}
          </span>
        )}
      </Styled.Header>
      <Input
        id={uniqueId}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        textAlign={textAlign}
        onChange={onChange}
        value={value}
        pattern={pattern}
        inputMode={inputMode}
        required={required}
      />
      <ErrorMessageBox errorMessage={errorMessage} />
    </Styled.Container>
  );
};

InputBox.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  hasLengthCounter: PropTypes.bool,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  isError: PropTypes.bool,
  pattern: PropTypes.string,
  inputMode: PropTypes.string,
  required: PropTypes.bool,
};

InputBox.defaultProps = {
  labelText: '',
  placeholder: '',
  hasLengthCounter: false,
  textAlign: 'left',
  type: 'text',
  onChange: null,
  value: '',
  errorMessage: '',
  isError: false,
  pattern: null,
  inputMode: 'text',
  required: false,
};

export default InputBox;
