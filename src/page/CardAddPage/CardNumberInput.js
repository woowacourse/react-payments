import React from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import PropTypes from 'prop-types';

const CardNumberInput = (props) => {
  const { cardNumbers, handleCardNumbersInput } = props;

  return (
    <InputContainer title={'카드 번호'} bgColor={'bg-gray-250'} width={'w-full'}>
      <>
        {Array.from({ length: 4 }).map((_, index) => {
          const currentKey = Object.keys(cardNumbers)[index];
          return (
            <React.Fragment key={`cardNumber-${currentKey}`}>
              <Input
                type={index > 1 ? 'password' : 'text'}
                length={4}
                placeholder={'0000'}
                value={cardNumbers[currentKey]}
                onChange={(e) => handleCardNumbersInput(e, currentKey)}
                className={'px-4'}
              />
              {index === 3 ? '' : <span>-</span>}
            </React.Fragment>
          );
        })}
      </>
    </InputContainer>
  );
};

export default CardNumberInput;

CardNumberInput.propTypes = {
  cardNumbers: PropTypes.object.isRequired,
  handleCardNumbersInput: PropTypes.func.isRequired,
};
