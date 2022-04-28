import React, { useRef, useState } from 'react';
import { isBackspace, isNumeric } from '../utils/commons';

const InvalidNumberCharList = ['.', 'e', ' '];

const getNextRef = (refs, name) => {
  const nextRefId = refs[name].id + 1;

  return Object.values(refs).find((ref) => ref.id === nextRefId)?.ref || null;
};

const getPrevRef = (refs, name) => {
  const nextRefId = refs[name].id - 1;

  return Object.values(refs).find((ref) => ref.id === nextRefId)?.ref || null;
};

const useFormSchema = (formSchema) => {
  const initialValues = {};
  const validationSchema = {};
  const initialErrors = {};
  const allowedKeyInput = {};
  const inputRefs = {};

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

  const bindErrors = (fieldName, { required }) => {
    initialErrors[fieldName] = {
      isError: required,
      errorMessage: required
        ? `[${fieldName}] 입력되지 않은 항목이 있습니다.`
        : null,
      showError: false,
    };
  };

  const useInputRefs = (fieldName, index) => {
    inputRefs[fieldName] = {
      id: index,
      ref: useRef(),
    };
  };

  Object.entries(formSchema).forEach(([fieldName, schema], index) => {
    bindInitialValues(fieldName, schema);
    bindValidationSchema(fieldName, schema);
    bindAllowedKeyInput(fieldName, schema);
    bindErrors(fieldName, schema);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInputRefs(fieldName, index);
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
    inputRefs,
  };
};

const EasyForm = ({ children, formSchema, onSubmit, onSubmitError }) => {
  const {
    values,
    setValues,
    validationSchema,
    isInvalidInput,
    errors,
    setErrors,
    inputRefs,
  } = useFormSchema(formSchema);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (!Object.prototype.hasOwnProperty.call(values, name)) {
      throw new Error('올바르지 않은 필드 참조입니다.');
    }

    if (
      !Object.prototype.hasOwnProperty.call(validationSchema, name) ||
      isInvalidInput(name, value)
    )
      return;

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

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value.length >= formSchema[name].maxLength) {
      const nextRef = getNextRef(inputRefs, name);

      if (nextRef) nextRef.current.focus();
    }
  };

  const handleKeyDown = (event) => {
    const {
      target: { name },
    } = event;

    if (isBackspace(event) && values[name] === '') {
      const prevRef = getPrevRef(inputRefs, name);

      if (prevRef) prevRef.current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const invalidFieldNames = Object.keys(errors).filter(
      (name) => errors[name].isError
    );

    if (invalidFieldNames.length > 0) {
      const invalidInputRefs = invalidFieldNames
        .map((name) => inputRefs[name])
        .sort((a, b) => a.id - b.id);

      invalidFieldNames.forEach((name) => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: {
            ...prevErrors[name],
            showError: true,
          },
        }));
      });

      onSubmitError(errors, invalidInputRefs);

      return;
    }

    onSubmit(values, setSubmitting);
  };

  const registerInputProps = (name) => ({
    name,
    ref: inputRefs[name].ref,
    value: values[name],
    onChange: handleChange,
    onKeyDown: handleKeyDown,
  });

  return (
    <>
      {children({
        values,
        submitting,
        handleChange,
        handleKeyDown,
        handleSubmit,
        errors,
        inputRefs,
        registerInputProps,
      })}
    </>
  );
};

export default EasyForm;
