import { useState } from 'react';
import useObjectRef from './useObjectRef';
import useFormSchema from './useFormSchema';

// formSchema를 useFormSchema를 이용하여 사용 가능한 형태로 분해
// onChange, onKeyDown으로 에러 체크 및 포커싱 지원
// 외부에서 정의한 onSubmit, onSubmitError 사용하여 handleSubmit 생성
const useForm = ({ formSchema, onSubmit, onSubmitError }) => {
  const {
    values,
    setValues,
    isInvalidInput,
    errors,
    setErrorTrue,
    setErrorMessages,
    focusNextElement,
    focusPrevElement,
  } = useFormSchema(formSchema);

  const [isSubmitting, setIsSubmitting] = useState(false);
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
      keyCode,
    } = event;
    focusPrevElement(keyCode, name, getPrevElement(name));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const invalidFieldNames = Object.keys(errors).filter(
      (name) => errors[name].isError
    );

    if (invalidFieldNames.length > 0) {
      const invalidInputRefs = invalidFieldNames
        .map((name) => ref.current[name])
        .sort((a, b) => a.id - b.id);

      invalidFieldNames.forEach((name) => {
        setErrorTrue(name);
      });

      onSubmitError(errors, invalidInputRefs);
      return;
    }

    setIsSubmitting(true);
    await onSubmit(values);
    setIsSubmitting(false);
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

  const getInputClassName = (fieldName) =>
    `input-basic ${errors[fieldName]?.showError ? 'error' : ''}`;

  return {
    values,
    isSubmitting,
    handleSubmit,
    registerInputProps,
    getInputClassName,
  };
};

export default useForm;
