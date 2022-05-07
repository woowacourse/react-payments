import { useState, useRef } from 'react';

function useSomeInput(entries) {
  const [stateObject, setStateObject] = useState(
    Object.fromEntries(entries.map(key => [key, '']))
  );
  const [validations, setValidations] = useState(
    Object.fromEntries(entries.map(key => [key, false]))
  );
  const inputRefs = Object.fromEntries(entries.map(key => [key, useRef()]));
  const currentInputRef = useRef();

  return {
    stateObject,
    validations,
    inputRefs,
    currentInputRef,
    setStateObject,
    setValidations,
  };
}

export default useSomeInput;
