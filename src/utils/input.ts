import { KeyboardEvent } from 'react';

export const isValidateKey = (event: KeyboardEvent<HTMLInputElement>, pattern: string): boolean => {
  const validKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Escape', 'Enter', 'Home', 'End'];

  if (validKeys.includes(event.key) || new RegExp(pattern).test(event.key)) {
    return true;
  }

  return false;
};
