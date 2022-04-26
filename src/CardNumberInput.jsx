import React, { useState } from "react";

export default function CardNumberInput() {
  const [inputValueList, setInputValueList] = useState(["", "", "", ""]);

  const handleInputUpdate = ({ target: { value } }, order) => {
    if (!Number.isInteger(Number(value)) || value.length > 4) return;

    setInputValueList((prevValueList) => {
      const newValueList = [...prevValueList];
      newValueList[order] = value;

      return newValueList;
    });
  };

  return (
    <fieldset style={{ display: "flex" }}>
      <legend>카드 비밀번호</legend>
      <input
        type="number"
        value={inputValueList[0]}
        onChange={(e) => handleInputUpdate(e, 0)}
      />
      {inputValueList[0].length === 4 && <p>-</p>}
      <input
        type="number"
        value={inputValueList[1]}
        onChange={(e) => handleInputUpdate(e, 1)}
      />
      {inputValueList[1].length === 4 && <p>-</p>}
      <input
        type="password"
        value={inputValueList[2]}
        onChange={(e) => handleInputUpdate(e, 2)}
      />
      {inputValueList[2].length === 4 && <p>-</p>}
      <input
        type="password"
        value={inputValueList[3]}
        onChange={(e) => handleInputUpdate(e, 3)}
      />
    </fieldset>
  );
}
