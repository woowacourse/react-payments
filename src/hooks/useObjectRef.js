import { useRef } from 'react';
import { generateIndex } from '../utils/commons';

const useObjectRef = () => {
  const fields = useRef({});
  const indexGenerator = generateIndex(0);

  const bindElement = (name, callback) => (element) => {
    fields.current[name] = {
      id: indexGenerator.next().value,
      element,
    };

    callback(fields.current[name]);
  };

  const getNextElementByName = (name) => {
    const currentElement = fields.current[name];
    const nextRefId = currentElement.id + 1;

    return (
      Object.values(fields.current).find((input) => input.id === nextRefId)
        ?.element || null
    );
  };

  const getPrevElementByName = (name) => {
    const currentInput = fields.current[name];
    const prevRefId = currentInput.id - 1;

    return (
      Object.values(fields.current).find((input) => input.id === prevRefId)
        ?.element || null
    );
  };

  return { fields, bindElement, getNextElementByName, getPrevElementByName };
};

export default useObjectRef;
