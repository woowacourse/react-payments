import { useState } from "react";

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState("");

  const onChangeSecurityCode = (e) => {
    setSecurityCode(e.target.value);
  };

  return [securityCode, onChangeSecurityCode];
};

export default useSecurityCode;
