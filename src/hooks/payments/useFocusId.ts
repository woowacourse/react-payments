import { useState, useEffect } from 'react';

function useFocusId() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      setFocusedId((event.target as HTMLElement).id);
    };

    window.addEventListener('focus', handleFocus, true);
    window.addEventListener('blur', () => setFocusedId(null), true);

    return () => {
      window.removeEventListener('focus', handleFocus, true);
      window.removeEventListener('blur', () => setFocusedId(null), true);
    };
  }, []);

  return focusedId;
}

export default useFocusId;
