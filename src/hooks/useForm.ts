import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  submitAction: () => void;
  changeAction: (name: string, value: string) => void;
  errorOptions: any;
}

const useForm = ({ submitAction, changeAction, errorOptions }: Props) => {
  const [error, setError] = useState(errorOptions?.initState);

  const checkFormValidity = (elements: HTMLInputElement[]) => {
    return elements.every((elem) => {
      if (elem.tagName !== 'INPUT') return true;

      const { name, value } = elem;

      const errorMessage = errorOptions?.validator && errorOptions?.validator[name]?.(value);
      if (errorMessage) {
        setError((prev: any) => ({ ...prev, [name]: errorMessage }));
        elem.focus();

        return false;
      }

      return true;
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElements = (e.target as HTMLFormElement).elements;
    const elements = formElements ? ([...formElements] as HTMLInputElement[]) : [];

    const ok = checkFormValidity(elements);
    if (!ok) return;

    submitAction();
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value, maxLength } = target;

    if (!canChange(target)) return;

    setError((prev: any) => ({ ...prev, [name]: '' }));

    if (value.length === maxLength) {
      const formElements = target.closest('form')?.elements;
      const elements = formElements ? ([...formElements] as HTMLInputElement[]) : [];
      focusToNextFormElement(elements, target);
    }

    changeAction(name, value);
  };

  const focusToNextFormElement = (elements: HTMLInputElement[], target: HTMLInputElement) => {
    elements.forEach((elem, index) => {
      if (elem !== target) return;

      elements[index + 1]?.focus();
    });
  };

  const canChange = (target: HTMLInputElement) => {
    const {
      value,
      maxLength,
      dataset: { numeric },
    } = target;

    if (value.length > maxLength) return false;
    if (numeric) {
      if (!isNumeric(value)) return false;
    }

    return true;
  };

  const isNumeric = (value: string) => {
    return /^[0-9]*$/.test(value);
  };

  return { onSubmit, onChange, error };
};

export default useForm;
