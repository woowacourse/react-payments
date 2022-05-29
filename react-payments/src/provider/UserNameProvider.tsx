import { createContext, useState } from "react";
import { isOverMaxLength } from "../util/validator";
import { MAX_LENGTH } from "../constants";
import { Target, UserName, UserNameContextProvider } from "../types";

const initialUserName: UserName = "";

export const UserNameContext = createContext<UserNameContextProvider>({
  state: { userName: initialUserName },
  action: {
    onChangeUserName: ({ target }) => null,
    resetUserName: () => null,
  },
});

const UserNameProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState(initialUserName);

  const onChangeUserName = ({ target }: Target) => {
    if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
      return;
    }
    setUserName(target.value);
  };

  const resetUserName = () => {
    setUserName(initialUserName);
  };

  return (
    <UserNameContext.Provider
      value={{
        state: { userName },
        action: { onChangeUserName, resetUserName },
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
