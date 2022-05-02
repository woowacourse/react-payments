import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

const Input = styled.input(() => ({
  backgroundColor: '#ECEBF1',
  height: '45px',
  width: '43px',
  borderRadius: '7px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  marginRight: '7px',
  '&:focus': {
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: 'white',
  },
}));

type Props = {
  value?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CardPasswordInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { value, disabled, onChange } = props;

  if (disabled) {
    return <Input disabled placeholder="•" />;
  }

  return (
    <>
      <Input
        id="card-password-input"
        autoComplete="off"
        type="text"
        onChange={onChange}
        value={value}
        placeholder=""
        ref={ref}
      />
    </>
  );
});

CardPasswordInput.displayName = 'CardPasswordInput';

export default CardPasswordInput;
