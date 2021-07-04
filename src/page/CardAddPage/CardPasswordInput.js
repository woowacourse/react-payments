import React, { useContext } from 'react';

import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const CardPasswordInput = () => {
  const { password } = useContext(PaymentsContext);

  return (
    <InputContainer title={'카드 비밀번호'} width={'w-7/12'}>
      <>
        {Array.from({ length: 4 }).map((_, index) => {
          const currentKey = Object.keys(password.value)[index] ?? '';
          return (
            <Input
              key={index}
              className={`mr-1.5 text-center ${index > 1 && 'bg-opacity-0'}`}
              width={'small'}
              type={'password'}
              length={1}
              name={currentKey ?? ''}
              value={password.value[currentKey] ?? '*'}
              onChange={password.handleChange}
            />
          );
        })}
      </>
    </InputContainer>
  );
};

export default CardPasswordInput;
