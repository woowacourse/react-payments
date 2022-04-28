import { useState } from "react";
import { MAX_LENGTH } from "../constants";
import { isOverMaxLength } from "../util";

const useSecurityCode = () => {
  const [securityCode, setSecurityCode] = useState("");

  const onChangeSecurityCode = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.SECURITY_CODE)) {
      return;
    }
    setSecurityCode(target.value);
  };

  return [securityCode, onChangeSecurityCode];
};

export default useSecurityCode;
