import { useState } from "react";
import { MAX_LENGTH } from "../constants";
import { isOverMaxLength } from "../util";

const useUserName = () => {
  const [userName, setUserName] = useState("");

  const onChangeUserName = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
      return;
    }
    setUserName(target.value);
  };

  return [userName, onChangeUserName];
};

export default useUserName;
