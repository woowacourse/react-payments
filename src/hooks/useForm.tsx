import React, { useState } from 'react';

interface useFormProps<T> {
  initialValues: T;
}

function useForm<T>({ initialValues }: useFormProps<T>) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    handleChange,
  };
}

export default useForm;
