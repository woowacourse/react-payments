import React, { useState } from "react";

interface useInputProps {
  initialValue: string;
  validator: (value: string) => boolean;
}

const useInput = ({ initialValue = "", validator }: useInputProps) => {
  const [value, setValue] = useState<string>(initialValue);

  const handler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (validator && !validator(target.value)) return;

    setValue(target.value);
  };

  return [value, handler];
};

export default useInput;
