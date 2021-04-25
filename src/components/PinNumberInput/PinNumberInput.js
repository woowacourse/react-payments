import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Styled from './PinNumberInput.styles';
import { initArray } from '../../utils';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';

const PinNumberInput = ({
  values,
  dotCount,
  labelText,
  required,
  errorMessage,
  isError,
  onChange,
}) => {
  const [inputRef] = useState(initArray(2, useRef()));

  const handleChange = (event) => {
    const [, index] = event.target.name.split('-');

    if (!event.target.value) {
      inputRef[Number(index) - 1]?.focus();
      return;
    }

    inputRef[Number(index)].value = event.target.value;
    inputRef[Number(index) + 1]?.focus();

    if (onChange) onChange(event);
  };

  return (
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
                // eslint-disable-next-line no-return-assign
                ref={(el) => (inputRef[index] = el)}
                onChange={handleChange}
                value={value}
                required={required}
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
  );
};

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
