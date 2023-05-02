import { useEffect } from "react";

const useKeyDown = (key: string, onKeyDown: () => void) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === key) {
        onKeyDown();
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [key, onKeyDown]);
};
export default useKeyDown;
