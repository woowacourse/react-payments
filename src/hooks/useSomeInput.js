import { useState, useRef } from 'react';

function useSomeInput(entries) {
  const [stateObject, setStateObject] = useState(
    Object.fromEntries(entries.map(key => [key, '']))
  );
  const [validations, setValidations] = useState(
    Object.fromEntries(entries.map(key => [key, false]))
  );
  const refs = Object.fromEntries(entries.map(key => [key, useRef()]));

  return { stateObject, validations, refs, setStateObject, setValidations };
}

export default useSomeInput;
