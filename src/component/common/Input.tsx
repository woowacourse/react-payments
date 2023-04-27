import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  valueChangeSubscribers?: ((value: string) => void)[];
  parsers?: ((value: string) => string)[];
  defaultValue?: string;
}

export default function Input(props: Props) {
  const { valueChangeSubscribers, parsers, defaultValue, className } = props;

  const [value, setValue] = useState(defaultValue ?? "");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    const validatedValue = parsers?.reduce(
      (prev, validator) => validator(prev), newValue
    );

    setValue(validatedValue ?? newValue);
  };

  useEffect(() => {
    valueChangeSubscribers?.forEach((subscriberFunction) => {
      subscriberFunction(value);
    });
  }, [value, valueChangeSubscribers]);

  return (
    <input
      {...props}
      value={value}
      onChange={onChangeHandler}
      className={`${className} ${styles.input}`}
    />
  );
}
