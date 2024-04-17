import { Dispatch, SetStateAction, useState, useEffect } from "react";
import Input from "./Input";
import { DATE_PLACEHOLDER } from "../constants";

export default function CardExpirationDateInputField({
  date,
  setDate,
}: {
  date: Record<string, string>;
  setDate: Dispatch<SetStateAction<Record<string, string>>>;
}) {
  const [errorMessages, setErrorMessages] = useState<[number, string][]>([]);

  const today = new Date();
  const todayMonth = today.getMonth() + 1;
  const todayYear = today.getFullYear() - 2000;

  const updateErrorMessage = (index: number, message: string) => {
    const errorMessageIndex = errorMessages.findIndex(([i, _]) => i === index);

    if (errorMessageIndex === -1)
      setErrorMessages([...errorMessages, [index, message]]);
    else {
      const updatedErrorMessages = [...errorMessages];
      updatedErrorMessages[errorMessageIndex] = [index, message];
      setErrorMessages(updatedErrorMessages);
    }
  };

  const removeErrorMessage = (index: number) => {
    const prevErrorMessages = [...errorMessages];
    setErrorMessages(prevErrorMessages.filter(([i]) => i !== index));
  };

  const checkExpired = ({
    month = date.month,
    year = date.year,
  }: {
    month?: string;
    year?: string;
  }) => {
    if (year === "" || month === "") return;

    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear() - 2000;

    if (Number(year) === todayYear && Number(month) < todayMonth) {
      console.log(Number(month), todayMonth);
      updateErrorMessage(0, "만료됐음");
      return;
    }

    if (Number(year) < todayYear) {
      updateErrorMessage(1, "만료됐음");
      return;
    }

    removeErrorMessage(0);
    removeErrorMessage(1);
    return false;
  };

  useEffect(() => {
    console.log(errorMessages);
  }, errorMessages);

  const handleMonth = (e) => {
    const input = Number(e.target.value);

    if (isNaN(input)) {
      updateErrorMessage(0, "숫자만 입력 가능합니다.");
      return;
    }

    if (input <= 1 || e.target.value.length >= 2)
      setDate({ ...date, month: e.target.value });
    else if (input >= 2 && input <= 9)
      setDate({ ...date, month: e.target.value.padStart(2, "0") });

    checkExpired({ month: e.target.value });

    removeErrorMessage(0);
  };

  const handleYear = (e) => {
    const input = Number(e.target.value);

    if (isNaN(input) && e.target.value.length !== 2) {
      updateErrorMessage(1, "숫자를 입력해주세요.");
      return;
    }

    if (e.target.value.length !== 2) {
      updateErrorMessage(1, "잘못된 연도 형식입니다.");
    } else {
      removeErrorMessage(1);
    }

    checkExpired({ year: e.target.value });

    setDate({ ...date, year: e.target.value });
  };

  return (
    <>
      <div>유효기간</div>
      <Input
        onChange={handleMonth}
        placeholder={DATE_PLACEHOLDER.MONTH}
        maxLength={2}
        value={date.month}
        isError={errorMessages.filter(([i]) => i === 0).length !== 0}
        // onBlur={(e) => handleBlur(e, i)}
      />
      <Input
        onChange={handleYear}
        placeholder={DATE_PLACEHOLDER.YEAR}
        maxLength={2}
        value={date.year}
        isError={errorMessages.filter(([i]) => i === 1).length !== 0}
        // onBlur={(e) => handleBlur(e, i)}
      />

      {errorMessages.length !== 0 && (
        <div>{errorMessages[errorMessages.length - 1][1]}</div>
      )}
    </>
  );
}
