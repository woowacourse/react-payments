import { useEffect, useRef } from "react";

function useUpdateEffect(sideEffect, deps) {
  const isInitialRender = useRef(false);

  useEffect(() => {
    if (isInitialRender.current) sideEffect();
    else isInitialRender.current = true;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
}

export default useUpdateEffect;
