import { KeyboardEvent } from 'react';

export const isValidateKey = (event: KeyboardEvent<HTMLInputElement>, pattern: string): boolean => {
  const validKeys = [
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Tab',
    'Escape',
    'Enter',
    'Home',
    'End',
  ];

  if (validKeys.includes(event.key) || isPatternMatch(event.key, pattern)) {
    return true;
  }

  return false;
};

export const isPatternMatch = (value: string, pattern: string) => new RegExp(pattern).test(value);
