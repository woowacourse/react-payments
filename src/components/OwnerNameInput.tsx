import React, { useState } from "react";
import FormLabel from "./common/FormLabel";
import Input from "./common/Input";

function OwnerNameInput() {
  const [onwerName, setOwnerName] = useState("");
  const [error, setError] = useState({});
  const ownerNameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const value = event.currentTarget.value as string;
  };

  return (
    <div>
      <div>
        <FormLabel>카드 소유자 이름(선택)</FormLabel>
      </div>
      <Input value={onwerName} onChange={ownerNameChange} />
    </div>
  );
}
