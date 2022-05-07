import React, { forwardRef } from 'react';

type Props = {
  className?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  css?: any;
};

const CardFormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      css={{
        width: '100%',
        textAlign: 'center',
        fontSize: '20px',
        border: 'none',
      }}
      {...props}
      ref={ref}
    />
  );
});

export default CardFormInput;
