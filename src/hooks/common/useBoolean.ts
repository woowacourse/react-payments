import { useState } from "react";

const useBoolean = (initialValue: boolean = false) => {
  const [flag, setFlag] = useState(initialValue);

  const setTrue = () => {
    setFlag(true);
  };

  const setFalse = () => {
    setFlag(false);
  };

  return { flag, setFlag, setTrue, setFalse };
};

export default useBoolean;
