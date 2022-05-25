import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockInput } from 'components/Atoms/Input';
import InputLabel from 'components/Atoms/InputLabel';
import { CLASS } from 'constant/selector';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: ${props => props.width};
  gap: 7px;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const InvalidMessage = styled.span`
  position: absolute;
  word-break: normal;
  bottom: -14px;
  width: 300px;
  overflow: visible;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: red;
`;

function ExpiredDateInput({ expiredDate, handleInputChange, isValid, invalidMessage, width }) {
  const { month, year } = expiredDate;

  const isValidDate = date => {
    const dateRegex = /^[0-9]{2}$/;

    return dateRegex.test(date);
  };

  const isAllEmptyValue = () => {
    return !month && !year;
  };

  return (
    <Container width={width}>
      <InputLabel label="만료일" />
      <InputWrapper>
        <BlockInput
          style={{
            width: '50%',
            backgroundColor: 'none',
          }}
          value={month}
          onChange={handleInputChange}
          type="text"
          maxLength="2"
          placeholder="MM"
          name="month"
          isValid={isValidDate(month)}
        />
        /
        <BlockInput
          style={{
            width: '50%',
            backgroundColor: 'none',
          }}
          value={year}
          onChange={handleInputChange}
          type="text"
          maxLength="2"
          placeholder="YY"
          name="year"
          isValid={isValidDate(year)}
        />
      </InputWrapper>
      <InvalidMessage className={CLASS.INVALID_INPUT_MESSAGE}>
        {isValid || isAllEmptyValue() ? '' : invalidMessage}
      </InvalidMessage>
    </Container>
  );
}

ExpiredDateInput.propTypes = {
  expiredDate: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  invalidMessage: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default ExpiredDateInput;
