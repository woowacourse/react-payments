import React, {
  createContext,
  useContext,
  ReactNode,
  ChangeEvent,
  RefObject,
} from 'react';
import { InputFieldState } from '../types/models';
import { useMultipleInputFields } from '../hooks/useCardInputHooks';
import { isValidNumberSegment } from '../utils/cardValidation';

interface NumbersContextValue {
  numberFields: InputFieldState[];
  handleNumbersChange: (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  numberInputRefs: RefObject<HTMLInputElement | null>[];
}

const NumbersContext = createContext<NumbersContextValue | null>(null);

const NUMBER_PLACEHOLDERS = ['1234', '1234', '1234', '1234'] as const;
const NUMBER_SEGMENT_LENGTH = 4;

export const NumbersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [numberFields, handleNumbersChange, numberInputRefs] =
    useMultipleInputFields(
      ['', '', '', ''],
      NUMBER_PLACEHOLDERS as unknown as string[],
      NUMBER_SEGMENT_LENGTH,
      isValidNumberSegment
    );

  return (
    <NumbersContext.Provider
      value={{ numberFields, handleNumbersChange, numberInputRefs }}
    >
      {children}
    </NumbersContext.Provider>
  );
};

export function useNumbersContext(): NumbersContextValue {
  const ctx = useContext(NumbersContext);
  if (!ctx)
    throw new Error(
      'useNumbersContext는 NumbersContextProvider 내에서 사용되어야 합니다.'
    );
  return ctx;
}
