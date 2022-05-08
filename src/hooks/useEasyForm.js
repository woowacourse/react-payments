import { useRef, useState } from 'react';

const useEasyForm = (
  { initialValues, validationMode, shouldUseReportValidity } = {
    initialValues: {},
    validationMode: 'onSubmit',
    shouldUseReportValidity: true,
  }
) => {
  const [formState, setFormState] = useState({
    isSubmitting: false,
    errors: {},
    watchingValues: initialValues,
  });
  const inputElementsRef = useRef({});
  const inputElementList = [];

  const updateFormState = (state) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      ...state,
    }));
  };

  const updateWatchingValues = (name, state) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      watchingValues: {
        ...prevFormState.watchingValues,
        [name]: state,
      },
    }));
  };

  const updateErrors = (name, state) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: {
        ...prevFormState.errors,
        [name]: state,
      },
    }));
  };

  const bindElement =
    (name, { validation: customValidation }) =>
    (element) => {
      const inputElement = {
        element,
      };

      if (customValidation) {
        inputElement.customValidate = () => {
          const validity = customValidation.find(
            ({ assert }) => !assert(inputElement.element.value)
          );
          const isValid = !validity;
          const validationMessage = isValid
            ? ''
            : validity.message ?? '유효하지 않은 값입니다.';

          inputElement.element.setCustomValidity(validationMessage);

          return isValid;
        };
      }

      inputElementsRef.current[name] = inputElement;
      inputElementList.push(inputElement);
    };

  const getNextElementByName = (name) => {
    const elementId = inputElementList.findIndex(
      (inputElement) => inputElement.element.name === name
    );

    return inputElementList[elementId + 1];
  };

  const getPrevElementByName = (name) => {
    const elementId = inputElementList.findIndex(
      (inputElement) => inputElement.element.name === name
    );

    return inputElementList[elementId - 1];
  };

  const validate = (name) => {
    const inputElement = inputElementsRef.current[name];
    let isValid = true;

    if (shouldUseReportValidity) {
      isValid = inputElement.element.reportValidity();
    } else {
      isValid =
        inputElement.element.checkValidity() ||
        (inputElement.customValidate && inputElement.customValidate());
    }

    updateErrors(name, inputElement.element.validationMessage);

    return isValid;
  };

  const onChange = ({ target }) => {
    const { name, value } = target;

    if (validationMode === 'onChange') {
      validate(name);
    }

    updateWatchingValues(name, value);

    if (value.length >= target.getAttribute('maxlength')) {
      getNextElementByName(name)?.element.focus();
    }
  };

  const onKeyDown = ({ keyCode, target: { name, value } }) => {
    const isBackspace = keyCode === 8;

    if (isBackspace && value === '') {
      getPrevElementByName(name)?.element.focus();
    }
  };

  const handleSubmit = (onSubmit, onError) => async (event) => {
    event.preventDefault();

    let isValid = true;

    if (!shouldUseReportValidity) {
      const validationResults = Object.keys(inputElementsRef.current).map(
        (name) => validate(name)
      );

      isValid = validationResults.every((validationResult) => validationResult);
    }

    updateFormState({
      isSubmitting: true,
    });

    try {
      if (isValid) {
        onSubmit(event);

        return;
      }

      if (onError) onError(event);
    } finally {
      updateFormState({
        isSubmitted: true,
      });
    }
  };

  const registerForm = ({ onSubmit, onError }) => {
    return {
      onSubmit: handleSubmit(onSubmit, onError),
      disabled: formState.isSubmitting,
      noValidate: !shouldUseReportValidity,
    };
  };

  const registerInput = (name, options) => {
    const { initialValue, validation, watch, className, ...rest } = options;

    return {
      ...rest,
      name,
      ref: bindElement(name, options),
      onChange,
      onKeyDown,
      className: `${className} ${formState.errors[name] ? 'error' : ''}`,
    };
  };

  return {
    registerForm,
    registerInput,
    watchingValues: formState.watchingValues,
    errors: formState.errors,
  };
};

export default useEasyForm;
