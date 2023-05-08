import { FormEvent } from 'react';
import { getFormData } from 'utils/formDataGetter';

export const useForm = (onSubmit: (formData: FormData) => void) => {
  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    const formData = getFormData(event.target as HTMLFormElement);

    if (formData) {
      onSubmit(formData);
    }
  };

  return { handleForm };
};
