import React, { useState } from "react";

export default function CardExpireDateInput() {
  const [inputValueList, setInputValueList] = useState(["", ""]);

  const handleInputUpdate = ({ target: { value } }, order) => {
    if (!/^\d{0,2}$/.test(value)) return;

    if (order === 0 && (Number(value) > 12 || Number(value) < 1)) return;

    setInputValueList((prevValueList) => {
      const newValueList = [...prevValueList];
      newValueList[order] = value;

      return newValueList;
    });
  };

  return (
    <fieldset>
      <legend>만료일</legend>
      <input
        type="text"
        value={inputValueList[0]}
        onChange={(e) => handleInputUpdate(e, 0)}
      />
      <input
        type="text"
        value={inputValueList[1]}
        onChange={(e) => handleInputUpdate(e, 1)}
      />
    </fieldset>
  );
}
