import { useState, useCallback } from 'react';

const useForm = (initialForm) => {
  const [form, setForm] = useState(initialForm);

  const onInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const setInput = useCallback((name, value) => {
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onInputChange, setInput, reset];
};

export default useForm;
