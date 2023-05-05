import type { RefObject } from 'react';

export type InputRef = RefObject<HTMLInputElement>;

export interface CardFormFieldProps {
  inputRefs: InputRef[];
}
