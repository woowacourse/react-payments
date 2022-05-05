import { useEffect, useState } from "react";

const useReady = (state, validator) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(!validator(state));
  }, [state, ready, validator]);

  return [ready];
};

export default useReady;
