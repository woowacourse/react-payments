import { useState } from "react";

const useFormValidation = initialValidation => {
  const [formValidation, setFormValidation] = useState(initialValidation);

  const validateFormValidation = (key, isValid) => {
    setFormValidation(prev => {
      const newFormValidation = { ...prev };

      newFormValidation[key] = isValid;

      return newFormValidation;
    });
  };

  return { formValidation, validateFormValidation };
};

export default useFormValidation;
