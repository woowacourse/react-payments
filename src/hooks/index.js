import { useState } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e, validationFunc, dataType, key) => {
    const {
      target: { value: changedData, maxLength },
    } = e;

    if (!validationFunc(changedData, maxLength)) {
      return;
    }

    if (key) {
      setForm({
        ...form,
        [`${dataType}`]: { ...form[`${dataType}`], [`${key}`]: changedData },
      });
    } else {
      setForm({
        ...form,
        [`${dataType}`]: changedData,
      });
    }
  };

  const reset = resetValue => {
    setForm({
      ...resetValue,
    });
  };

  return [form, onChange, reset];
}

export default useInputs;
