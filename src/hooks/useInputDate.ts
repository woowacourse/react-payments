import { useState } from "react";
import { validation } from "../validation/input";

export function useInputDate() {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    switch (name) {
      case "month":
        if (!validation.isCorrectMonth(value)) {
          e.target.value = month;
        } else {
          setMonth(value);
        }
        break;
      case "year":
        if (!validation.isNumber(value)) {
          e.target.value = year;
        } else {
          setYear(value);
        }
    }
    if (name === "month") setMonth(value);
    else setYear(value);
  }

  return { month, year, handleChange };
}
