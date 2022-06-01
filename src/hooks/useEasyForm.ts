import { useRef, useState, ChangeEventHandler, FormEventHandler } from 'react';

type Name = HTMLInputElement['name'];
type Values = Record<Name, any>;
type FormState<T extends Values> = {
  isSubmitting: boolean;
  isSubmitted: boolean;
  errors: Partial<{
    [name in keyof T]: string;
  }>;
  watchingValues: Partial<T>;
};
type InputElementRef = { element: HTMLInputElement; customValidate?: Function };
type Validation = { assert: Function; message: string };
type Props = {
  initialValues: Values;
  validationMode: 'onSubmit' | 'onChange';
  shouldUseReportValidity: boolean;
};

const useEasyForm = (
  { initialValues, validationMode, shouldUseReportValidity }: Props = {
    initialValues: {},
    validationMode: 'onSubmit',
    shouldUseReportValidity: true,
  }
) => {
  const [formState, setFormState] = useState<FormState<typeof initialValues>>({
    isSubmitting: false,
    isSubmitted: false,
    errors: {},
    watchingValues: initialValues,
  });
  const inputElementsRef = useRef<Record<Name, InputElementRef>>({});
  const inputElementList: InputElementRef[] = [];

  const updateFormState = (state: Partial<FormState<typeof initialValues>>) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      ...state,
    }));
  };

  const updateWatchingValues = (name: Name, state: string) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      watchingValues: {
        ...prevFormState.watchingValues,
        [name]: state,
      },
    }));
  };

  const updateErrors = (name: Name, state: Validation['message']) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      errors: {
        ...prevFormState.errors,
        [name]: state,
      },
    }));
  };

  const bindElement =
    (
      name: Name,
      { validation: customValidation }: { validation: Validation[] }
    ) =>
    (element: HTMLInputElement) => {
      const inputElement: InputElementRef = {
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

  const getNextElementByName = (name: Name) => {
    const elementId = inputElementList.findIndex(
      (inputElement) => inputElement.element.name === name
    );

    return inputElementList[elementId + 1];
  };

  const getPrevElementByName = (name: Name) => {
    const elementId = inputElementList.findIndex(
      (inputElement) => inputElement.element.name === name
    );

    return inputElementList[elementId - 1];
  };

  const validate = (name: Name) => {
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

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { name, value } = target;

    if (validationMode === 'onChange') {
      validate(name);
    }

    updateWatchingValues(name, value);

    if (value.length >= Number(target.getAttribute('maxlength'))) {
      getNextElementByName(name)?.element.focus();
    }
  };

  const onKeyDown = ({
    keyCode,
    target: { name, value },
  }: {
    keyCode: number;
    target: HTMLInputElement;
  }) => {
    const isBackspace = keyCode === 8;

    if (isBackspace && value === '') {
      getPrevElementByName(name)?.element.focus();
    }
  };

  const handleSubmit =
    (
      onSubmit: Function,
      onError?: Function
    ): FormEventHandler<HTMLFormElement> =>
    async (event) => {
      event.preventDefault();

      let isValid = true;

      if (!shouldUseReportValidity) {
        const validationResults = Object.keys(inputElementsRef.current).map(
          (name) => validate(name)
        );

        isValid = validationResults.every(
          (validationResult) => validationResult
        );
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

  const registerForm = ({
    onSubmit,
    onError,
  }: {
    onSubmit: Function;
    onError?: Function;
  }) => {
    return {
      onSubmit: handleSubmit(onSubmit, onError),
      disabled: formState.isSubmitting,
      noValidate: !shouldUseReportValidity,
    };
  };

  const registerInput = (
    name: Name,
    options: {
      initialValue: any;
      validation: Validation[];
      watch?: boolean;
      className: string;
    }
  ) => {
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
