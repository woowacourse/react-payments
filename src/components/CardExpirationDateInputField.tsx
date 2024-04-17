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
  return (
    <>
      <div>유효기간</div>
      {date.map((value, i) => (
        <Input placeholder={DATE_PLACEHOLDER[i]} maxLength={2} />
      ))}
      <div>에러메세지</div>
    </>
  );
}
