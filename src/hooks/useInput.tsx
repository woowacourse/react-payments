import {ChangeEvent, useState} from 'react';

const useInput = <T extends Record<string, any>>(initialData: T) => {
  const [formData, setFormData] = useState(initialData);

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    order?: string
  ) => {
    const {name, value} = e.target;

    if (order) {
      setFormData((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          [order]: value,
        },
      }));
      return;
    }

    setFormData((prev) => ({...prev, [name]: value}));
  };

  return {formData, onChange};
};

export default useInput;
