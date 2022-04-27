import { useState } from "react";

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState("");

  const onChangeSecurityCode = (e) => {
    if (e.target.value.length > 3) {
      return;
    }
    setSecurityCode(e.target.value);
  };

  return [securityCode, onChangeSecurityCode];
};

export default useSecurityCode;
