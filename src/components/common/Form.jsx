import React, { useState } from 'react';
import { isBackspace } from '../../utils/commons';
import useObjectRef from '../../hooks/useObjectRef';
import useFormSchema from '../../hooks/useFormSchema';

const Form = ({ children, formSchema, onSubmit, onSubmitError }) => {
  const {
    values,
    setValues,
    isInvalidInput,
    errors,
    setErrors,
    setErrorMessages,
    focusNextElement,
  } = useFormSchema(formSchema);

  const [submitting, setSubmitting] = useState(false);
  const { ref, bindElement, getNextElement, getPrevElement } =
    useObjectRef(formSchema);

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (!Object.prototype.hasOwnProperty.call(values, name)) {
      throw new Error('올바르지 않은 필드 참조입니다.');
    }

    if (isInvalidInput(name, value)) return;

    setErrorMessages(name, value);

    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    focusNextElement(name, value, getNextElement(name));
  };

  const handleKeyDown = (event) => {
    const {
      target: { name },
    } = event;

    if (isBackspace(event) && values[name] === '') {
      const prevElement = getPrevElement(name);

      if (prevElement) prevElement.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const invalidFieldNames = Object.keys(errors).filter(
      (name) => errors[name].isError
    );

    if (invalidFieldNames.length > 0) {
      const invalidInputRefs = invalidFieldNames
        .map((name) => ref.current[name])
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

  const registerInputProps = (name) => {
    return {
      name,
      ref: bindElement(name),
      value: values[name],
      onChange: handleChange,
      onKeyDown: handleKeyDown,
    };
  };

  return (
    <>
      {children({
        values,
        submitting,
        handleChange,
        handleKeyDown,
        handleSubmit,
        errors,
        inputRefs: ref,
        registerInputProps,
      })}
    </>
  );
};

export default Form;
