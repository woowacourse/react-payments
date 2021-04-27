import React from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import PropTypes from 'prop-types';

const CardExpirationInput = (props) => {
  const { expiration, handleExpirationInput } = props;

  return (
    <InputContainer title={'만료일'} width={'w-5/12'} bgColor={'bg-gray-250'}>
      <>
        <Input
          placeholder={'MM'}
          type={'number'}
          min={1}
          max={12}
          value={expiration.month}
          onChange={(e) => handleExpirationInput(e, 'month')}
          className={'text-center pl-4'}
        />
        <span className="text-gray-400 ">/</span>
        <Input
          placeholder={'YY'}
          type={'number'}
          min={21}
          value={expiration.year}
          onChange={(e) => handleExpirationInput(e, 'year')}
          className={'text-center pr-4'}
        />
      </>
    </InputContainer>
  );
};

export default CardExpirationInput;

CardExpirationInput.propTypes = {
  expiration: PropTypes.object.isRequired,
  handleExpirationInput: PropTypes.func.isRequired,
};
