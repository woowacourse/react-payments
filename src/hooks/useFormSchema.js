import { useState } from 'react';
import { isBackspace, isNumeric } from '../utils/commons';

const InvalidNumberCharList = ['.', 'e', ' '];

const useFormSchema = (formSchema) => {
  const initialValues = {};
  const validationSchema = {};
  const initialErrors = {};
  const allowedKeyInput = {};

  const bindInitialValues = (fieldName, { initialValue = '' }) => {
    initialValues[fieldName] = initialValue;
  };

  const bindValidationSchema = (
    fieldName,
    { alias = fieldName, type, minLength, maxLength, required, validation }
  ) => {
    const validationList = [];

    if (required) {
      validationList.push({
        assert: (value) => value.length > 0,
        errorMessage: `입력되지 않은 항목이 있습니다. (${alias})`,
      });
    }

    if (type === 'number') {
      validationList.push({
        assert: (value) => isNumeric(value),
        errorMessage: `숫자만 입력 가능합니다. (${alias})`,
      });
    }

    if (minLength) {
      validationList.push({
        assert: (value) => value.length >= minLength,
        errorMessage: `${minLength}자 이상 입력해주세요. (${alias})`,
      });
    }

    if (maxLength) {
      validationList.push({
        assert: (value) => value.length <= maxLength,
        errorMessage: `${maxLength}자 이하로 입력 해주세요. (${alias})`,
      });
    }

    if (validation) {
      validationList.push(
        ...validation.map((rule) => ({
          ...rule,
          errorMessage: `${rule.errorMessage} (${alias})`,
        }))
      );
    }

    validationSchema[fieldName] = validationList;
  };

  const bindAllowedKeyInput = (fieldName, { type, maxLength }) => {
    const rules = [];

    if (type === 'number') {
      rules.push((value) => isNumeric(value));
      rules.push((value) =>
        Array.from(value).every((char) => !InvalidNumberCharList.includes(char))
      );
    }

    if (maxLength) {
      rules.push((value) => value.length <= maxLength);
    }

    allowedKeyInput[fieldName] = rules;
  };

  const bindErrors = (fieldName, { alias, required }) => {
    initialErrors[fieldName] = {
      isError: required,
      errorMessage: required
        ? `입력되지 않은 항목이 있습니다. (${alias})`
        : null,
      showError: false,
    };
  };

  Object.entries(formSchema).forEach(([fieldName, schema]) => {
    bindInitialValues(fieldName, schema);
    bindValidationSchema(fieldName, schema);
    bindAllowedKeyInput(fieldName, schema);
    bindErrors(fieldName, schema);
  });

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrors);
  const isInvalidInput = (fieldName, value) =>
    allowedKeyInput[fieldName].some((rule) => !rule(value));

  const setErrorMessages = (name, value) => {
    const errorMessageList = validationSchema[name]
      .filter(({ assert }) => !assert(value))
      .map(({ errorMessage }) => errorMessage);

    const isError = errorMessageList.length > 0;

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: {
        isError,
        errorMessage: isError ? errorMessageList : null,
        showError: isError,
      },
    }));
  };

  const setErrorTrue = (name) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: {
        ...prevErrors[name],
        showError: true,
      },
    }));
  };

  const focusNextElement = (name, value, nextElement) => {
    if (value.length >= formSchema[name].maxLength && nextElement)
      nextElement.focus();
  };

  const focusPrevElement = (keyCode, name, prevElement) => {
    if (isBackspace(keyCode) && values[name] === '' && prevElement) {
      prevElement.focus();
    }
  };

  return {
    values,
    setValues,
    isInvalidInput,
    errors,
    setErrorMessages,
    setErrorTrue,
    focusNextElement,
    focusPrevElement,
  };
};

export default useFormSchema;
