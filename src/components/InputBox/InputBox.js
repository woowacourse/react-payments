import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Styled from './InputBox.styles';
import Input from '../Input/Input';

const InputBox = ({
  width,
  labelText,
  placeholder,
  maxLength,
  hasLengthCounter,
  textAlign,
  type,
  onChange,
  value,
  errorMessage,
}) => {
  const uniqueId = nanoid(10);

  return (
    <Styled.Container width={width} errorMessage={errorMessage}>
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
      />
    </Styled.Container>
  );
};

InputBox.propTypes = {
  width: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  hasLengthCounter: PropTypes.bool,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
};

InputBox.defaultProps = {
  width: '100%',
  labelText: '',
  placeholder: '',
  hasLengthCounter: false,
  textAlign: 'left',
  type: 'text',
  onChange: null,
  value: '',
  errorMessage: '',
};

export default InputBox;
