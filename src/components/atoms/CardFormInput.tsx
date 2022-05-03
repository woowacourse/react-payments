import React, { forwardRef } from 'react';

type Props = {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: any;
};

const CardFormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { onChange, value, type, placeholder, style } = props;

  return (
    <>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        css={style}
        ref={ref}
      />
    </>
  );
});

export default CardFormInput;
