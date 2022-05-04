import { useState } from 'react';
import useObjectRef from './useObjectRef';
import useFormSchema from './useFormSchema';
import { isBackspace } from '../utils/commons';

// formSchema를 useFormSchema를 이용하여 사용 가능한 형태로 분해
// onChange, onKeyDown으로 에러 체크 및 포커싱 지원
// 외부에서 정의한 onSubmit, onSubmitError 사용하여 handleSubmit 생성
const useCardForm = ({ cardFormSchema }) => {
  const {
    initialField,
    isInvalidInput,
    errors,
    setErrorTrue,
    setErrorMessages,
  } = useFormSchema(cardFormSchema);

  const [values, setValues] = useState(initialField);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, bindElement, getNextElement, getPrevElement } =
    useObjectRef(cardFormSchema);

  const focusNextElement = (name, value, nextElement) => {
    if (value.length >= cardFormSchema[name].maxLength && nextElement)
      nextElement.focus();
  };

  const focusPrevElement = (keyCode, name, prevElement) => {
    if (isBackspace(keyCode) && values[name] === '' && prevElement) {
      prevElement.focus();
    }
  };

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

  const onSubmitAction = async (cardInfo) => {
    alert('카드를 추가했습니다.');
    console.log(cardInfo);
  };

  const focusErrorInput = (invalidInputRefs) => {
    const firstInvalidInput = invalidInputRefs[0].element;
    const { errorMessage } = errors[firstInvalidInput.name];

    firstInvalidInput.focus();
    alert(errorMessage);
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

      focusErrorInput(invalidInputRefs);
      return;
    }

    setIsSubmitting(true);
    await onSubmitAction(values);
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

  const getInputClassName = (fieldName, additionalClassName = '') =>
    `input-basic ${
      errors[fieldName]?.showError ? 'error' : ''
    } ${additionalClassName}`.trim();

  return {
    values,
    isSubmitting,
    handleSubmit,
    registerInputProps,
    getInputClassName,
  };
};

export default useCardForm;
