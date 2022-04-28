import { useRef } from 'react';
import { generateIndex } from '../utils/commons';

const useObjectRef = () => {
  const ref = useRef({});
  const indexGenerator = generateIndex(0);

  const bindElement = (name) => (element) => {
    ref.current[name] = {
      id: indexGenerator.next().value,
      element,
    };
  };

  const getNextElement = (name) => {
    const currentElement = ref.current[name];
    const nextRefId = currentElement.id + 1;

    return (
      Object.values(ref.current).find((input) => input.id === nextRefId)
        ?.element || null
    );
  };

  const getPrevElement = (name) => {
    const currentInput = ref.current[name];
    const prevRefId = currentInput.id - 1;

    return (
      Object.values(ref.current).find((input) => input.id === prevRefId)
        ?.element || null
    );
  };

  return { ref, bindElement, getNextElement, getPrevElement };
};

export default useObjectRef;
