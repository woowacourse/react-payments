import type { ChangeEventHandler, RefObject } from 'react';

export interface CardFormNumberFieldProps {
  handleNumberChange: ChangeEventHandler<HTMLInputElement>;
  inputRefs: RefObject<HTMLInputElement>[];
}

export interface CardFormOwnerFieldProps {
  handleOwnerChange: ChangeEventHandler<HTMLInputElement>;
  inputRefs: RefObject<HTMLInputElement>[];
}
