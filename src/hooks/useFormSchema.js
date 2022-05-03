import { useState } from 'react';
import { isNumeric } from '../utils/commons';

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
    { type, minLength, maxLength, required, validation }
  ) => {
    const validationList = [];

    if (required) {
      validationList.push({
        assert: (value) => value.length > 0,
        errorMessage: '입력되지 않은 항목이 있습니다.',
      });
    }

    if (type === 'number') {
      validationList.push({
        assert: (value) => isNumeric(value),
        errorMessage: '숫자만 입력 가능합니다.',
      });
    }

    if (minLength) {
      validationList.push({
        assert: (value) => value.length >= minLength,
        errorMessage: `${minLength}자 이상 입력해주세요.`,
      });
    }

    if (maxLength) {
      validationList.push({
        assert: (value) => value.length <= maxLength,
        errorMessage: `${maxLength}자 이하로 입력 해주세요.`,
      });
    }

    if (validation) {
      validationList.push(
        ...validation.map((rule) => ({
          ...rule,
          errorMessage: rule.errorMessage,
        }))
      );
    }

    validationSchema[fieldName] = validationList;
  };

  const bindAllowedKeyInput = (fieldName, { type, maxLength }) => {
    const rules = [];
    const typeSet = new Set(Array.isArray(type) ? type : [type]);

    typeSet.forEach((typeValue) => {
      if (typeValue === 'number') {
        rules.push((value) => isNumeric(value));
        rules.push((value) =>
          Array.from(value).every(
            (char) => !InvalidNumberCharList.includes(char)
          )
        );
      }

      if (typeValue instanceof RegExp) {
        rules.push((value) => typeValue.test(value));
      }
    });

    if (maxLength) {
      rules.push((value) => value.length <= maxLength);
    }

    allowedKeyInput[fieldName] = rules;
  };

  const bindErrors = (fieldName, { required }) => {
    initialErrors[fieldName] = {
      isError: required,
      errorMessage: required ? `입력되지 않은 항목이 있습니다.` : null,
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

  return {
    values,
    setValues,
    validationSchema,
    isInvalidInput,
    errors,
    setErrors,
  };
};

export default useFormSchema;
