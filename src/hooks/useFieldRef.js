import useObjectRef from './useObjectRef';
import { hasProperty } from '../utils/commons';

const defaultValidity = {
  isValid: true,
  validationMessage: '',
};

const useFieldRef = ({ shouldUseNativeHint }) => {
  const { fields, bindElement, getNextElementByName, getPrevElementByName } =
    useObjectRef();

  const reportNativeValidity = (name) => {
    const { element } = fields.current[name];
    const isValid = element.reportValidity();
    const { validationMessage } = element;

    return {
      isValid,
      validationMessage,
    };
  };

  const checkNativeValidity = (name) => {
    const { element } = fields.current[name];
    const isValid = element.checkValidity();
    const { validationMessage } = element;

    return {
      isValid,
      validationMessage: isValid ? '' : validationMessage,
    };
  };

  const checkCustomValidity = (name, value) => {
    if (!hasProperty(fields.current[name], 'customValidate')) {
      return defaultValidity;
    }

    const { isValid, validationMessage } =
      fields.current[name].customValidate(value);

    return {
      isValid,
      validationMessage: isValid ? '' : validationMessage,
    };
  };

  const checkValidity = (name, value) => {
    let validity = defaultValidity;

    if (!hasProperty(fields.current, name)) {
      return validity;
    }

    if (shouldUseNativeHint) {
      return reportNativeValidity(name);
    }

    if (validity.isValid) {
      validity = checkNativeValidity(name, value);
    }

    if (validity.isValid) {
      validity = checkCustomValidity(name, value);
    }

    return validity;
  };

  return {
    fields,
    bindElement,
    getNextElementByName,
    getPrevElementByName,
    checkValidity,
  };
};

export default useFieldRef;
