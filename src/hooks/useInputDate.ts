import { useEffect, useState } from "react";
import { validation } from "../validation/input";

type PrevInputSection = "month" | "year";

export function useInputDate() {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [prevInputSection, setPrevInputSection] =
    useState<PrevInputSection | null>(null);

  useEffect(() => {
    prevInputSection === "year" && changeMonthText();
  }, [prevInputSection]);

  function changeMonthText() {
    month.length === 1 && setMonth(`0${month}`);
  }

  function changeDateInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "month":
        setPrevInputSection("month");
        if (value && !validation.isCorrectMonth(value)) {
          e.target.value = month;
          return;
        }
        setMonth(value);
        break;

      case "year":
        setPrevInputSection("year");
        if (
          value &&
          validation.isValueExist(value) &&
          !validation.isNumber(value)
        ) {
          e.target.value = year;
          return;
        }
        setYear(value);
    }
  }

  return { month, year, changeDateInput };
}
