import { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockInput } from '../Input';
import InputLabel from '../InputLabel';

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

function CardNumbersInput({ cardNumbers, handleInputChange, isValid, invalidMessage, width }) {
  const isValidCardNumber = cardNumber => {
    const cardNumberRegex = /^[0-9]{4}$/;

    return cardNumberRegex.test(cardNumber);
  };

  const isAllEmptyValue = () => {
    return cardNumbers.every(cardNumber => !cardNumber);
  };

  return (
    <Container width={width}>
      <InputLabel label={'카드 번호'} />
      <InputWrapper>
        {cardNumbers.map((cardNumber, index) => {
          return (
            <Fragment key={index}>
              <BlockInput
                style={{
                  width: '25%',
                  backgroundColor: 'none',
                  borderRadius: '0px',
                }}
                value={cardNumber}
                onChange={handleInputChange}
                type={index <= 1 ? 'text' : 'password'}
                maxLength="4"
                name={index}
                isValid={isValidCardNumber(cardNumber)}
              />
              {index === cardNumbers.length - 1 ? '' : '-'}
            </Fragment>
          );
        })}
      </InputWrapper>
      <InvalidMessage>{isValid || isAllEmptyValue() ? '' : invalidMessage}</InvalidMessage>
    </Container>
  );
}

CardNumbersInput.propTypes = {
  cardNumbers: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  invalidMessage: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default CardNumbersInput;
