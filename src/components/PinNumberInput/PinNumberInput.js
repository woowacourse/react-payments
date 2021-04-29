import { forwardRef } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Styled from './PinNumberInput.styles';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';
import REGEX from '../../constants/regex';

const PinNumberInput = forwardRef(
  (
    {
      values,
      dotCount,
      labelText,
      required,
      readOnly,
      errorMessage,
      isError,
      onChange,
      onFocus,
      onBlur,
    },
    ref
  ) => (
    <Styled.Container isError={isError}>
      <Styled.Header>
        <span>{labelText}</span>
      </Styled.Header>
      <Styled.InputContainer>
        {values.map((value, index) => {
          const key = `pin-${index}`;

          return (
            <Styled.Label htmlFor={key} key={key}>
              <Input
                id={key}
                name={key}
                type="password"
                maxLength={1}
                textAlign="center"
                // eslint-disable-next-line
                ref={(el) => (ref[index] = el)}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                value={value}
                required={required}
                readOnly={readOnly}
                pattern={REGEX.CONTINUOUS_NUMBER.source}
              />
            </Styled.Label>
          );
        })}
        {Array.from({ length: dotCount }).map(() => (
          <Styled.PasswordDot key={nanoid(10)} />
        ))}
      </Styled.InputContainer>
      <ErrorMessageBox errorMessage={errorMessage} />
    </Styled.Container>
  )
);

PinNumberInput.displayName = 'PinNumberInput';

PinNumberInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  dotCount: PropTypes.number,
  labelText: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
};

PinNumberInput.defaultProps = {
  values: ['', ''],
  dotCount: 2,
  labelText: '',
  required: false,
  readOnly: false,

  errorMessage: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  isError: false,
};

export default PinNumberInput;
