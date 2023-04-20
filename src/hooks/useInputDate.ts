import { useState } from "react";

export function useInputDate() {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (name === "month") setMonth(value);
    else setYear(value);
  }

  return { month, year, handleChange };
}
