import { useEffect, useRef } from "react";

function useUpdateEffect(sideEffect) {
  const isInitialRender = useRef(false);

  useEffect(() => {
    if (isInitialRender.current) sideEffect();
    else isInitialRender.current = true;
  });
}

export default useUpdateEffect;
