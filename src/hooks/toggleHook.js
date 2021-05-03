import { useState, useCallback } from "react";

const useToggle = () => {
  const [state, setState] = useState({
    isToggled: false,
    fadeAnimation: "fade-out",
    moveAnimation: "move-down",
  });

  const setToggled = useCallback(() => {
    setState((state) => ({
      ...state,
      isToggled: true,
      fadeAnimation: "fade-in",
      moveAnimation: "move-up",
    }));
  }, [setState]);

  const setUntoggled = useCallback(() => {
    setState((state) => ({
      ...state,
      isToggled: true,
      fadeAnimation: "fade-out",
      moveAnimation: "move-down",
    }));
    setTimeout(() => {
      setState((state) => ({
        ...state,
        isToggled: false,
        fadeAnimation: "fade-out",
        moveAnimation: "move-down",
      }));
    }, 350);
  }, [setState]);

  return {
    state,
    setToggled,
    setUntoggled,
  };
};

export default useToggle;
