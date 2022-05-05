import { createContext, useState } from "react";
import { isOverMaxLength } from "../util/validator";
import { MAX_LENGTH } from "../constants";

export const UserNameContext = createContext();

const UserNameProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const onChangeUserName = ({ target }) => {
    if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
      return;
    }
    setUserName(target.value);
  };

  return (
    <UserNameContext.Provider
      value={{ state: { userName }, action: { onChangeUserName } }}
    >
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
