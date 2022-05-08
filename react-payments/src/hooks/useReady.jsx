import { useEffect, useState } from "react";

const useReady = (state, validator, data) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(!validator(state, data));
  }, [state, ready, validator, data]);

  return [ready];
};

export default useReady;
