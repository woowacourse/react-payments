import { useState } from 'react';

const useFormState = () => {
  const [formState, setFormState] = useState({
    isValid: false,
    isSubmitting: false,
    isSubmitted: false,
    isSubmitSuccessful: false,
  });

  const updateFormState = (state) => {
    setFormState((prevFormState) => ({
      ...prevFormState,
      ...state,
    }));
  };

  return {
    formState,
    updateFormState,
  };
};

export default useFormState;
