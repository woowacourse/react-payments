import { useState, useCallback } from 'react';

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
};

export default useForm;
