import Input, { InputProps } from '@components/common/Input/Input';
import { forwardRef } from 'react';

type ExpirationDateInputProps = Omit<InputProps, 'type' | 'maxLength' | 'onChange'> & {
  onAddExpirationDate: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: 'MM' | 'YY';
};

const ExpirationDateInput = forwardRef<HTMLInputElement, ExpirationDateInputProps>(
  ({ isError = false, value, placeholder, onAddExpirationDate, id, nextRef }, ref) => {
    return (
      <Input
        id={id}
        maxLength={2}
        type="text"
        placeholder={placeholder}
        value={value}
        isError={isError}
        onChange={onAddExpirationDate}
        ref={ref}
        nextRef={nextRef}
      />
    );
  },
);

export default ExpirationDateInput;
