import React, { useState } from "react";

export default function CardPasswordInput() {
  const [inputValueList, setInputValueList] = useState(["", ""]);

  const handleInputUpdate = ({ target: { value } }, order) => {
    if (!Number.isInteger(Number(value)) || value.length > 1) return;

    setInputValueList((prevValueList) => {
      const newValueList = [...prevValueList];
      newValueList[order] = value;

      return newValueList;
    });
  };

  return (
    <fieldset>
      <legend htmlFor="card-password">카드 비밀번호</legend>
      <input
        type="password"
        name="card-password"
        value={inputValueList[0]}
        onChange={(e) => handleInputUpdate(e, 0)}
      />
      <input
        type="password"
        name="card-password"
        value={inputValueList[1]}
        onChange={(e) => handleInputUpdate(e, 1)}
      />
      ..
    </fieldset>
  );
}
