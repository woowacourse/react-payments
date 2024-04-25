import { useContext } from "react";

const useContextWrapper = <T>(contextValue: React.Context<T>) => {
  const context = useContext(contextValue);

  if (!context) {
    //TODO: Error Handling
    throw new Error("ERROR");
  }
  return context;
};

export default useContextWrapper;
