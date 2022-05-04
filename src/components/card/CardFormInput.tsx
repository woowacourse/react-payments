import React, { forwardRef } from 'react';

type Props = {
  className?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: any;
};

const CardFormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, type, onChange, value, placeholder, disabled, style } = props;

  return (
    <>
      <input
        className={className}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...(disabled ? { disabled: true } : '')}
        css={style}
        ref={ref}
      />
    </>
  );
});

export default CardFormInput;
