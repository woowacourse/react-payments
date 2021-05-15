import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import ErrorMessageBox from '../ErrorMessageBox/ErrorMessageBox';
import Styled from './CardNumberInput.styles';
import REGEX from '../../constants/regex';
import { FORM } from '../../constants';

const CardNumberInput = forwardRef(
  ({ values, onChange, onFocus, labelText, maskedInputFlags, errorMessage, isError }, ref) => (
    <Styled.Container isError={isError}>
      <Styled.Header>
        <span>{labelText}</span>
      </Styled.Header>
      <Styled.InputContainer>
        {values.map((value, index) => {
          const key = `cardNumber-${index}`;

          return (
            <Input
              key={key}
              name={key}
              type={maskedInputFlags[index] ? 'password' : 'text'}
              maxLength={FORM.CARD_NUMBER.MAX_LENGTH}
              textAlign="center"
              onFocus={onFocus}
              onChange={onChange}
              value={value}
              pattern={REGEX.NUMBER_WITH_LENGTH(FORM.CARD_NUMBER.MAX_LENGTH).source}
              inputMode="numeric"
              // eslint-disable-next-line
              ref={(el) => (ref[index] = el)}
              required
              aria-label={`${index + 1}번째 카드번호 입력란`}
            />
          );
        })}
      </Styled.InputContainer>
      <ErrorMessageBox errorMessage={errorMessage} />
    </Styled.Container>
  )
);

CardNumberInput.displayName = 'CardNumberInput';

CardNumberInput.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string),
  maskedInputFlags: PropTypes.arrayOf(PropTypes.bool),
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
};

CardNumberInput.defaultProps = {
  values: ['', '', '', ''],
  maskedInputFlags: [false, false, true, true],
  labelText: '카드 번호 입력',
  isError: false,
  errorMessage: '',
  onChange: () => {},
  onFocus: () => {},
};

export default CardNumberInput;
