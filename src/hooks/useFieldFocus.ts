import { useEffect, useState } from "react";

const useFocusField = (id: string) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    const handleFocus = (event: FocusEvent) => {
      if (event.target instanceof HTMLInputElement) {
        setIsFocused(event.target.id === id);
      }
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    document.addEventListener("focus", handleFocus, true);

    document.addEventListener("blur", handleBlur, true);

    return () => {
      document.removeEventListener("focus", handleFocus, true);

      document.removeEventListener("blur", handleBlur, true);
    };
  }, [id]);

  return { isFocused };
};

export default useFocusField;
