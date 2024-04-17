import { Dispatch, SetStateAction } from "react";
import Input from "./Input";
import { DATE_PLACEHOLDER } from "../constants";

export default function CardExpirationDateInputField({
  date,
  setDate,
}: {
  date: string[];
  setDate: Dispatch<SetStateAction<string[]>>;
}) {
  const handleChange = (e, index) => {
    const updatedExpirationDate = [...date];
    updatedExpirationDate[index] = e.target.value;
    setDate(updatedExpirationDate);
  };
  return (
    <>
      <div>유효기간</div>
      {date.map((value, i) => (
        <Input
          onChange={(e) => handleChange(e, i)}
          placeholder={DATE_PLACEHOLDER[i]}
          maxLength={2}
        />
      ))}
      <div>에러메세지</div>
    </>
  );
}
