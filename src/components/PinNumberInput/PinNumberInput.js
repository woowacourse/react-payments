import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Styled from './PinNumberInput.styles';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';
import REGEX from '../../constants/regex';

const PinNumberInput = forwardRef(
  ({ values, dotCount, labelText, required, errorMessage, isError, onChange }, ref) => (
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
                value={value}
                required={required}
                pattern={REGEX.CONTINUOUS_NUMBER.source}
              />
            </Styled.Label>
          );
        })}
        {Array.from({ length: dotCount }).map((_, index) => {
          const key = `dot-${index}`;

          return <Styled.PasswordDot key={key} />;
        })}
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
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
};

PinNumberInput.defaultProps = {
  values: ['', ''],
  dotCount: 2,
  labelText: '',
  required: false,
  errorMessage: '',
  onChange: () => {},
  isError: false,
};

export default PinNumberInput;
