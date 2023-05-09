import React, { PropsWithChildren, createContext, useRef } from 'react';

interface RefContextType {
  inputRefs: Array<React.RefObject<HTMLInputElement>>;
  focusNextInput: (
    order: number,
    conditionValue: number,
    isLast?: boolean
  ) => void;
}

export const RefContext = createContext<RefContextType>({
  inputRefs: [],
  focusNextInput: () => {
    return;
  },
});

const RefProvider = ({ children }: PropsWithChildren) => {
  const inputRefs: Array<React.RefObject<HTMLInputElement>> = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const focusNextInput = (
    order: number,
    conditionValue: number,
    isLast = false
  ) => {
    if (isLast) return;

    if (inputRefs[order].current?.value.length === conditionValue) {
      inputRefs[order + 1].current?.focus();
    }
  };

  const state = {
    inputRefs,
    focusNextInput,
  };

  return <RefContext.Provider value={state}>{children}</RefContext.Provider>;
};

export default RefProvider;
