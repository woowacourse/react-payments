import {ChangeEvent, useState} from 'react';
import {CardForm} from '../type/Card';

const useInput = (initialData: CardForm) => {
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
