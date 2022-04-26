import React, { useState } from "react";

export default function CardHolderNameInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputUpdate = ({ target: { value } }) => {
    if (!/^[a-z]*$/i.test(value) || value.length > 30) return;

    setInputValue(value.toUpperCase());
  };

  return (
    <>
      <label htmlFor="card-holder-name">카드 소유자 이름 (선택)</label>
      <input
        type="text"
        name="card-holder-name"
        value={inputValue}
        onChange={handleInputUpdate}
      />
    </>
  );
}
