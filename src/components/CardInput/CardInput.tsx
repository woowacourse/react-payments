import { forwardRef, ForwardedRef } from 'react';
import * as Styled from './CardInput.styles';

interface CardInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  order?: number;
}

const CardInput = forwardRef(
  (
    { onChange, order, ...props }: CardInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Styled.Input
        ref={ref}
        onChange={onChange}
        data-order={order}
        {...props}
      />
    );
  }
);

export default CardInput;
