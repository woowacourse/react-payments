import React, { PropsWithChildren, createContext, useRef } from 'react';

export const RefContext = createContext<
  Array<React.RefObject<HTMLInputElement>>
>([]);

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

  return (
    <RefContext.Provider value={inputRefs}>{children}</RefContext.Provider>
  );
};

export default RefProvider;
