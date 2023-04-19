import { useState, ChangeEvent } from "react";
import Input from "../../common/Input";

import "./inputBoxExpirationDate.css";
import { validateExpirationDate } from "../../../validation/ExpirationDate";

export default function InputBoxExpirationDate() {
  const [error, setError] = useState(true);

  const changeExpirationDate = (e: ChangeEvent<HTMLInputElement>) => {
    const originDate = e.target.value.split("/").join("").slice(0, 4);
    const formattedDate =
      originDate.length > 2
        ? originDate.slice(0, 2) + "/" + originDate.slice(2)
        : originDate;

    e.target.value = formattedDate;
    if (e.target.value.length > 5) e.target.value = e.target.value.slice(0, 5);

    setError(!validateExpirationDate(e.target.value));
  };

  return (
    <div className="input-box-expiration-date">
      <p>만료일</p>
      <Input
        className="input-expiration-date"
        type="text"
        onChange={changeExpirationDate}
        placeholder="MM / YY"
        inputMode="numeric"
      ></Input>
      <p className={error ? "visible" : ""}>error message</p>
    </div>
  );
}
