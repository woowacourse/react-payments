import PropTypes from 'prop-types';
import Styled from './Input.styles';

const Input = ({
  width,
  labelText,
  hasLabelText,
  placeholder,
  maxLength,
  hasLengthCounter,
  textAlign,
  type,
  onChange,
  value,
}) => (
  <Styled.Container width={width}>
    <Styled.Label>
      <Styled.Header>
        {hasLabelText && <span>{labelText}</span>}
        {hasLengthCounter && (
          <span>
            {value.length} / {maxLength}
          </span>
        )}
      </Styled.Header>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        maxlength={maxLength}
        textAlign={textAlign}
        onChange={onChange}
        value={value}
      />
    </Styled.Label>
  </Styled.Container>
);

Input.propTypes = {
  width: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  hasLabelText: PropTypes.bool,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  hasLengthCounter: PropTypes.bool,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  width: '100%',
  hasLabelText: false,
  placeholder: '',
  hasLengthCounter: false,
  textAlign: 'left',
  type: 'text',
  onChange: null,
  value: '',
};

export default Input;
