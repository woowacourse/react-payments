import { useEffect, useState } from "react";

const useReady = <S extends any, V extends (...args: any[]) => {}>(
  state: S,
  validator: V,
  data?: unknown
) => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setReady(!validator(state, data));
  }, [state, ready, validator, data]);

  return [ready];
};

export default useReady;
