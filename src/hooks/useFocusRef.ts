import React, { useEffect, useRef } from 'react';

function useFocusRef<T extends HTMLElement>() {
  const focusTargetRef = useRef<T>(null);
  useEffect(() => {
    focusTargetRef.current?.focus();
  }, [focusTargetRef]);

  return { focusTargetRef };
}

export default useFocusRef;
