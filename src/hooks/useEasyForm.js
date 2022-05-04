import { hasProperty, isBackspace } from '../utils/commons';
import useFieldRef from './useFieldRef';
import useFieldStates from './useFieldStates';
import useFormState from './useFormState';

const useEasyForm = ({
  initialValues = {},
  mode = 'onSubmit',
  shouldUseNativeHint = true,
}) => {
  const { formState, updateFormState } = useFormState();
  const { fieldStates, setFieldState, getFieldProperties } =
    useFieldStates(initialValues);
  const {
    fields,
    checkValidity,
    bindElement,
    getNextElementByName,
    getPrevElementByName,
  } = useFieldRef({ shouldUseNativeHint });

  const bindValidation =
    ({ validation }) =>
    (field) => {
      if (!validation) return;

      const current = field;
      let validationMessage = '';

      current.customValidate = () => {
        const failedValidation = validation.find(({ assert, message }) => {
          const isValid = assert(current.element.value);

          if (!isValid) {
            validationMessage = message;
          }

          return isValid;
        });

        current.element.setCustomValidity(validationMessage);

        return {
          isValid: !!failedValidation,
          validationMessage,
        };
      };
    };

  const validate = (name, value) => {
    const { isValid, validationMessage } = checkValidity(name, value);

    setFieldState(name, {
      isValid,
      validationMessage,
      showError: !isValid,
    });

    return isValid;
  };

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (!hasProperty(fields.current, name)) {
      throw new Error('올바르지 않은 필드 참조입니다.');
    }

    // if (!isAllowedInput(name, value)) {
    //   return;
    // }

    if (mode === 'onChange') {
      validate(name, value);
    }

    setFieldState(name, {
      value,
    });

    if (value.length >= fields.current[name]?.element.maxLength) {
      getNextElementByName(name)?.focus();
    }
  };

  const onKeyDown = (event) => {
    const {
      target: { name },
    } = event;

    if (isBackspace(event) && fieldStates[name].value === '') {
      getPrevElementByName(name)?.focus();
    }
  };

  const handleSubmit =
    (onSubmit, onError = () => {}) =>
    async (event) => {
      event.preventDefault();
      event.persist();

      let hasNoErrorThrowed = true;
      let isValid = true;

      if (!shouldUseNativeHint) {
        const results = Object.entries(fields.current).map(([name, current]) =>
          validate(name, current.element.value)
        );

        isValid = results.every((result) => result);
      }

      updateFormState({
        isSubmitting: true,
      });

      try {
        if (!isValid) {
          await onError({
            event,
            fields: fields.current,
          });

          return;
        }

        const values = getFieldProperties('value');

        await onSubmit({
          event,
          values,
        });
      } catch (error) {
        hasNoErrorThrowed = false;

        throw error;
      } finally {
        updateFormState({
          isSubmitted: true,
          isSubmitting: false,
          isSubmitSuccessful: isValid && hasNoErrorThrowed,
        });
      }
    };

  const bindForm = (onSubmit, onError) => {
    return {
      onSubmit: handleSubmit(onSubmit, onError),
      disabled: formState.isSubmitting,
      noValidate: !shouldUseNativeHint,
    };
  };

  const register = (name, options) => {
    const { initialValue, validation, inputFilter, ...rest } = options;

    return {
      ...rest,
      name,
      ref: bindElement(name, bindValidation(options)),
      onChange,
      onKeyDown,
    };
  };

  return {
    bindForm,
    register,
    formState,
    fieldStates,
    getFieldProperties,
  };
};

export default useEasyForm;
