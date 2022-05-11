import { useState, useRef } from 'react';
import useFocus from './useFocus';

function useSomeInput(entries, validate) {
  const [stateObject, setStateObject] = useState(Object.fromEntries(entries.map(key => [key, ''])));
  const [validations, setValidations] = useState(
    Object.fromEntries(entries.map(key => [key, false]))
  );
  const inputRefs = Object.fromEntries(entries.map(key => [key, useRef()]));
  const currentInputRef = useRef();

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
