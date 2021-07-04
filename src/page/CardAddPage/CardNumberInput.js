import React, { useContext } from 'react';

import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const CardNumberInput = () => {
  const { cardNumbers } = useContext(PaymentsContext);

  return (
    <InputContainer title={'카드 번호'} bgColor={'bg-gray-250'} width={'w-full'}>
      <>
        {Array.from({ length: 4 }).map((_, index) => {
          const currentKey = Object.keys(cardNumbers.value)[index];
          return (
            <React.Fragment key={`cardNumber-${currentKey}`}>
              <Input
                type={index > 1 ? 'password' : 'text'}
                length={4}
                placeholder={'0000'}
                value={cardNumbers.value[currentKey]}
                onChange={(e) => cardNumbers.handleChange(e, currentKey)}
                className={'px-3.5 text-center'}
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
