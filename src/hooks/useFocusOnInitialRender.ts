import { useEffect, useRef, useState } from 'react';

const useFocusOnInitialRender = <T extends HTMLElement>() => {
  const [isRendered, setIsRendered] = useState(false);
  const focusTargetRef = useRef<T>(null);

  useEffect(() => {
    if (!isRendered && focusTargetRef.current) {
      focusTargetRef.current.focus();
      setIsRendered(true);
    }
  }, []);

  return focusTargetRef;
};

export default useFocusOnInitialRender;
