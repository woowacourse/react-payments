import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const CardExpirationInput = () => {
  const { expiration } = useContext(PaymentsContext);

  return (
    <InputContainer title={'만료일'} width={'w-5/12'} bgColor={'bg-gray-250'}>
      <>
        <Input
          placeholder={'MM'}
          type={'number'}
          min={1}
          max={12}
          value={expiration.value.month}
          onChange={(e) => expiration.handleChange(e, 'month')}
          className={'text-center pl-4'}
        />
        <span className="text-gray-400 ">/</span>
        <Input
          placeholder={'YY'}
          type={'number'}
          min={21}
          value={expiration.value.year}
          onChange={(e) => expiration.handleChange(e, 'year')}
          className={'text-center pr-4'}
        />
      </>
    </InputContainer>
  );
};

export default CardExpirationInput;
