import { useState, useEffect } from "react";
import { useError } from "./useError";

export function useInputDate() {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    e.target.value = value.padStart(2, "0");
    if (name === "month") setMonth(value.padStart(2, "0"));
    else setYear(value.padStart(2, "0"));
  }

  return { month, year, handleChange };
}
