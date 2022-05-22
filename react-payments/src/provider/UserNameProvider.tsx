import React, { createContext, useCallback, useState } from "react";
import { isOverMaxLength } from "util/validator";
import { MAX_LENGTH } from "constants/index";
import { UserNameType } from "types";

interface InitialContextState {
  userName: UserNameType;
}

interface InitialContextValue {
  state: InitialContextState;
  action: {};
}

export const UserNameContext = createContext<InitialContextValue | null>(null);

const initialState = "";

const UserNameProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState<UserNameType>(initialState);

  const onChangeUserName = ({ target }: { target: HTMLInputElement }) => {
    if (isOverMaxLength(target, MAX_LENGTH.USER_NAME)) {
      return;
    }
    setUserName(target.value);
  };

  const resetUserName = useCallback(() => {
    setUserName(initialState);
  }, []);

  return (
    <UserNameContext.Provider
      value={{
        state: { userName },
        action: { onChangeUserName, resetUserName, setUserName },
      }}
    >
      {children}
    </UserNameContext.Provider>
  );
};

export default UserNameProvider;
