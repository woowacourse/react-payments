import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

import styles from "./Input.module.css";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  valueChangeSubscribers?: ((value: string) => void)[];
  parsers?: ((value: string) => string)[];
  defaultValue?: string;
}

export default function Input(props: Props) {
  const { valueChangeSubscribers, parsers, defaultValue, className, ...inputProps } = props;

  const [value, setValue] = useState(defaultValue ?? "");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    const parsedValue = parsers?.reduce(
      (prev, validator) => validator(prev),
      newValue,
    );

    setValue(parsedValue ?? newValue);
  };

  useEffect(() => {
    valueChangeSubscribers?.forEach((subscriberFunction) => {
      subscriberFunction(value);
    });
  }, [value]);

  return (
    <input
      {...inputProps}
      value={value}
      onChange={onChangeHandler}
      className={`${styles.input} ${className}`}
      defaultValue={defaultValue}
    />
  );
}
