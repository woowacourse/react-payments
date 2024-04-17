import { Dispatch, SetStateAction } from "react";
import Input from "./Input";

const DATE_PLACEHOLDER = ["MM", "YY"];

export default function CardExpirationDateInputField({
  date,
  setDate,
}: {
  date: string[];
  setDate: Dispatch<SetStateAction<string[]>>;
}) {
  return (
    <>
      <div>유효기간</div>
      {date.map((value, i) => (
        <Input placeholder={DATE_PLACEHOLDER[i]} />
      ))}
      <div>에러메세지</div>
    </>
  );
}
