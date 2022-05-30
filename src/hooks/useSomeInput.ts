import { useState, useRef, MutableRefObject } from 'react';
import useFocus from './useFocus';

function useSomeInput(entries: string[], validate: (target: string) => boolean) {
  const [stateObject, setStateObject] = useState(Object.fromEntries(entries.map(key => [key, ''])));
  const [validations, setValidations] = useState(
    Object.fromEntries(entries.map(key => [key, false]))
  );
  const inputRefs = Object.fromEntries(entries.map(key => [key, useRef(null)]));
  const currentInputRef: MutableRefObject<string | undefined> = useRef();

  const { focusPrevInput } = useFocus({
    validate,
    inputNames: entries,
    validations,
    inputRefs,
    currentInputRef,
  });

  return {
    stateObject,
    validations,
    inputRefs,
    currentInputRef,
    setStateObject,
    setValidations,
    focusPrevInput,
  };
}

export default useSomeInput;
