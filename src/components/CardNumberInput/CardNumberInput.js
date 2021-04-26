import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';
import Styled from './CardNumberInput.styles';
import { initArray } from '../../utils';
import REGEX from '../../constants/regex';

const CardNumberInput = ({
  values,
  onChange,
  labelText,
  maskedInputFlags,
  errorMessage,
  isError,
}) => {
  const [inputRef] = useState(initArray(4, useRef()));

  const handleChange = (event) => {
    const [, , index] = event.target.name.split('-');

    if (onChange) onChange(event);

    if (!event.target.value) {
      inputRef[Number(index) - 1]?.focus();
      return;
    }

    if (event.target.value.length === 4) {
      inputRef[Number(index) + 1]?.focus();
    }
  };

  return (
    <Styled.Container isError={isError}>
      <Styled.Header>
        <span>{labelText}</span>
      </Styled.Header>
      <Styled.InputContainer>
        {values.map((value, index) => {
          const key = `card-number-${index}`;

          return (
            <Input
              key={key}
              name={key}
              type={maskedInputFlags[index] ? 'password' : 'text'}
              maxLength="4"
              textAlign="center"
              onChange={handleChange}
              value={value}
              pattern={REGEX.NUMBER_WITH_LENGTH(4).source}
              inputmode="numeric"
              // eslint-disable-next-line no-return-assign
              ref={(el) => (inputRef[index] = el)}
              required
              aria-label={`${index + 1}번째 카드번호 입력란`}
            />
          );
        })}
      </Styled.InputContainer>
      <ErrorMessageBox errorMessage={errorMessage} />
    </Styled.Container>
  );
};

CardNumberInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  maskedInputFlags: PropTypes.arrayOf(PropTypes.bool),
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};

CardNumberInput.defaultProps = {
  values: ['', '', '', ''],
  maskedInputFlags: [false, false, true, true],
  labelText: '카드 번호 입력',
  isError: false,
  errorMessage: '',
  onChange: () => {},
};

export default CardNumberInput;
