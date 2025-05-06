import { RefObject } from 'react';

type FocusNextInputParams = {
  refs: RefObject<HTMLInputElement | null>[];
  currentIndex: number;
  value: string;
  maxLength: number;
};

const focusNextInputIfFilled = ({ refs, currentIndex, value, maxLength }: FocusNextInputParams) => {
  if (value.length >= maxLength) {
    refs[currentIndex + 1]?.current?.focus();
  }
};

export default focusNextInputIfFilled;
