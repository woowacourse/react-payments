import { useContext } from "react";

/**
 * useState훅의 형태로 사용한다.
 * @param contextValue
 * @returns [state, setState]
 */
const useContextWrapper = <T>(contextValue: React.Context<T>) => {
  const context = useContext(contextValue);

  if (!context) {
    //TODO: Error Handling
    throw new Error("ERROR");
  }
  return context;
};

export default useContextWrapper;
