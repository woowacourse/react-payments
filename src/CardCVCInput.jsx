import React, { useState } from "react";

export default function CardCVCInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputUpdate = ({ target: { value } }) => {
    if (!Number.isInteger(Number(value)) || value.length > 3) return;

    setInputValue(value);
  };

  return (
    <>
      <label htmlFor="CVC">보안코드 (CVC/CVV)</label>
      <input
        type="password"
        name="CVC"
        value={inputValue}
        onChange={handleInputUpdate}
      />
    </>
  );
}
