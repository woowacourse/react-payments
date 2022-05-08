import React, { useState } from 'react';
import cloneObject, { getValidityMessage, isString } from './utils';
import {
  UseFormProps,
  Field,
  UseFormState,
  UseFormRegister,
  FieldErrors,
  UseFormHandleSubmit,
  ErrorMessage,
  Subject,
} from './types';
import { defaultErrorMessage } from './constants';
import { nextFocus, prevFocus } from './autoFocus';
import createSubject from './createSubject';

const useForm = (
  props: UseFormProps = { shouldValidateOnChange: false, shouldUseAutoFocus: false, shouldShowNativeHint: true },
) => {
  const { shouldValidateOnChange, shouldUseAutoFocus, shouldShowNativeHint } = props;
  const [formState, setFormState] = useState<UseFormState>({
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    errors: {},
    isValid: false,
  });

  const _fields = React.useRef<Map<string, Field>>();
  const _fieldValueSubject = React.useRef<Subject>();
  !_fields.current && (_fields.current = new Map<string, Field>());
  !_fieldValueSubject.current && (_fieldValueSubject.current = createSubject());

  const showNativeErrorHint = (input: HTMLInputElement, message: string | null) => {
    if (message && shouldShowNativeHint) {
      input.setCustomValidity(message ?? '');
      input.reportValidity();
    }
  };

  const getField = (name: string): Field | null => {
    if (!_fields.current) return null;
    const field = _fields.current.get(name);
    return field ?? null;
  };

  const validateField = (name: string): ErrorMessage | null => {
    const field = getField(name);
    if (!field) return null;

    const { _ref, validate, validityMessage: customValidityMessage } = field;
    const input = _ref as HTMLInputElement;

    // 길이가 0인 경우에는 아직 입력을 안한거니까 에러를 보여줄 필요가 없다
    if (input.value.length === 0) {
      input.setCustomValidity(' '); // customError를 true로 하는 대신 error tip이 안나온다
      return null;
    }

    // 먼저 customError를 초기화 해주자
    input.setCustomValidity('');

    // 브라우저가 직접 검사하도록 시킨다
    // input.checkValidity();

    // native validation의 우선순위가 custom validate보다 높다
    if (!input.validity.valid && !input.validity.customError) {
      const errorMessage = getValidityMessage(input.validity, customValidityMessage);
      showNativeErrorHint(input, errorMessage);
      return errorMessage;
    }

    // native validation은 유효한데 custom validate함수가 있는 경우
    if (validate) {
      const result = validate(_ref.value);
      let errorMessage: null | string = null;
      if (result === false) {
        errorMessage = defaultErrorMessage;
      } else if (isString(result)) {
        errorMessage = result;
      }
      showNativeErrorHint(input, errorMessage);
      return errorMessage;
    }

    return null;
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;
    const field = getField(name);
    if (!field) return;

    if (value.length === 0 && event.key === 'Backspace') {
      field.isBackspacePressedOnEmptyInput = true;
    }
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    const {
      value: { length },
      name,
      maxLength,
    } = input;
    const field = getField(name);
    if (!field || !_fields.current) return;

    // 현재 필드가 유효성검사에 실패했다면 자동으로 넘어가지 않게 만든다
    if (!input.validity.valid) {
      return;
    }

    if (length === maxLength) {
      nextFocus(name, _fields.current);
    } else if (field.isBackspacePressedOnEmptyInput) {
      prevFocus(name, _fields.current);
      field.isBackspacePressedOnEmptyInput = false;
    }
  };

  const handleChange = (event: any) => {
    if (!_fields.current || !_fieldValueSubject.current) return;
    const { name } = event.target;
    const field = getField(name);
    if (!field) return;

    const { onChange, _ref } = field;
    const input = _ref as HTMLInputElement;

    // validation
    if (shouldValidateOnChange) {
      const errors = cloneObject(formState.errors) as FieldErrors;
      errors[name] && delete errors[name]; // 초기화
      const result = validateField(name);
      result && (errors[name] = result);
      const isValid = Object.keys(errors).length === 0;
      setFormState(prev => cloneObject({ ...prev, errors, isValid }));
    }

    // 초기화를 해주지 않으면 submit후 계속 자동으로 report가 된다
    // input.setCustomValidity(' ');

    onChange && onChange(event);

    // watch하고 있는 컴포넌트에게 값의 변화를 알려준다
    _fieldValueSubject.current.notify(name, input.value);
  };

  const handleSubmit: UseFormHandleSubmit = onSubmit => (event: any) => {
    event.preventDefault();
    if (!_fields.current) return;

    setFormState(prev => ({ ...cloneObject(prev), isSubmitting: true, isSubmitted: false, isSubmitSuccessful: false }));

    const values = [..._fields.current.keys()].reduce((acc, name) => {
      const field = getField(name);
      if (!field) return acc;

      acc[name] = field._ref.value;
      return acc;
    }, {} as Record<string, string>);

    // validation
    const errors: FieldErrors = {};
    let isValid = true;
    Object.keys(values).forEach(name => {
      const errorMessage = validateField(name);
      if (errorMessage) {
        isValid = false;
        errors[name] = errorMessage;
      }
    });

    onSubmit(event, { isValid, values, errors });

    setFormState(prev => ({
      ...cloneObject(prev),
      isSubmitting: true,
      isSubmitted: true,
      isSubmitSuccessful: true,
      isValid,
    }));
  };

  const register: UseFormRegister = (name, options) => {
    return {
      ref: (ref: any) => {
        if (!ref) return;
        if (!(ref instanceof HTMLInputElement)) throw new Error('현재는 Input만 지원합니다!');

        // form control을 온전히 form hook에게 맡긴다
        const { form } = ref;
        form && (form.noValidate = true);

        _fields.current &&
          _fields.current.set(name, {
            _ref: ref,
            onChange: options?.onChange,
            validate: options?.validate,
            validityMessage: {
              valueMissing: options?.required?.message || options?.minLength?.message,
              tooLong: options?.maxLength?.message,
              tooShort: options?.minLength?.message,
              rangeUnderflow: options?.min?.message,
              rangeOverflow: options?.max?.message,
              patternMismatch: options?.pattern?.message,
            },
            isBackspacePressedOnEmptyInput: false, // 이전 필드로 포커스 하기 위해 필요합니다
          });
      },
      onChange: event => handleChange(event),
      onKeyUp: shouldUseAutoFocus ? handleKeyUp : undefined,
      onKeyDown: shouldUseAutoFocus ? handleKeyDown : undefined,
      onBlur: options?.onBlur,
      onFocus: options?.onFocus,
      name,
      // minLength가 있는데 처음에 값을 안넣고 submit하는걸 방지한다
      required: options?.required?.value || !!options?.minLength,
      maxLength: options?.maxLength?.value,
      minLength: options?.minLength?.value,
      min: options?.min?.value,
      max: options?.max?.value,
      pattern: options?.pattern?.value,
    };
  };

  return {
    formState,
    handleSubmit,
    register,
    _fieldValueSubject,
  };
};

export default useForm;
