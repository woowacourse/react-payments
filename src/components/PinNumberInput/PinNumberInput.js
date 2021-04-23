import { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import Styled from './PinNumberInput.styles';
import { initArray } from '../../utils';

const PinNumberInput = ({ values, dotCount, labelText, errorMessage, onChange }) => {
  const [inputRef] = useState(initArray(2, useRef()));

  const handleChange = (event) => {
    const [, index] = event.target.name.split('-');

    if (!event.target.value) {
      inputRef[Number(index) - 1]?.focus();
      return;
    }

    inputRef[Number(index)].value = event.target.value;
    inputRef[Number(index) + 1]?.focus();

    onChange(event);
  };

  return (
    <Styled.Container errorMessage={errorMessage}>
      <Styled.Header>
        <span>{labelText}</span>
      </Styled.Header>
      <Styled.InputContainer>
        {values.map((value, index) => {
          const key = `pin-${index}`;

          return (
            <label htmlFor={key} key={key}>
              <Input
                id={key}
                name={key}
                width="39px"
                type="password"
                maxLength={1}
                textAlign="center"
                // eslint-disable-next-line no-return-assign
                inputRef={(el) => (inputRef[index] = el)}
                onChange={handleChange}
                value={value}
              />
            </label>
          );
        })}
        {Array.from({ length: dotCount }).map(() => (
          <Styled.PasswordDot key={nanoid(10)} />
        ))}
      </Styled.InputContainer>
    </Styled.Container>
  );
};

PinNumberInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  dotCount: PropTypes.number,
  labelText: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};

PinNumberInput.defaultProps = {
  values: ['', ''],
  dotCount: 2,
  labelText: '',
  errorMessage: '',
  onChange: null,
};

export default PinNumberInput;
