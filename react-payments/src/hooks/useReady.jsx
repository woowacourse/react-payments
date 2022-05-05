import { useEffect, useState } from "react";

const useReady = (state, validator) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (validator(state) === ready) {
      setReady((prev) => !prev);
    }
  }, [state, ready, validator]);

  return [ready];
};

export default useReady;
