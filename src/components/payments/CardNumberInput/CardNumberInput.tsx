import React, { forwardRef } from 'react';
import Input, { InputProps } from '@components/common/Input/Input';

type CardNumberInputProps = Omit<InputProps, 'placeholder' | 'type' | 'maxLength' | 'onChange'> & {
  onAddCardNumber: React.ChangeEventHandler<HTMLInputElement>;
};

const CardNumberInput = forwardRef<HTMLInputElement, CardNumberInputProps>(
  ({ isError = false, value, onAddCardNumber, id, nextRef }, ref) => {
    return (
      <Input
        id={id}
        maxLength={4}
        placeholder="1234"
        type="text"
        value={value}
        isError={isError}
        onChange={onAddCardNumber}
        ref={ref}
        nextRef={nextRef}
      />
    );
  },
);

export default CardNumberInput;
