import { useEffect, useRef } from 'react';

const useFocusOnInitialRender = <T extends HTMLElement>() => {
  const focusTargetRef = useRef<T>(null);

  useEffect(() => {
    if (focusTargetRef.current) {
      focusTargetRef.current.focus();
    }
  }, []);

  return focusTargetRef;
};

export default useFocusOnInitialRender;
