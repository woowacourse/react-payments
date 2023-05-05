import { forwardRef, ForwardedRef } from 'react';
import * as Styled from './CardInput.styles';

interface CardInputProps {
  type: string;
  value: string;
  maxLength?: number;
  placeholder?: string;
  order?: number;
  required?: boolean;
  autoFocus?: boolean;
  inputMode: 'text' | 'numeric';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CardInput = forwardRef(
  (cardInputProps: CardInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <Styled.Input
        ref={ref}
        data-order={cardInputProps.order}
        {...cardInputProps}
      />
    );
  }
);

export default CardInput;
