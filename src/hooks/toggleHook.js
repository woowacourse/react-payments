import { useState } from "react";

const useToggle = () => {
  const [state, setState] = useState({
    isToggled: false,
    fadeAnimation: "fade-out",
    moveAnimation: "move-down",
  });

  const setToggled = () => {
    setState((state) => ({
      isToggled: true,
      fadeAnimation: "fade-in",
      moveAnimation: "move-up",
    }));
  };

  const setUntoggled = () => {
    setState((state) => ({
      isToggled: true,
      fadeAnimation: "fade-out",
      moveAnimation: "move-down",
    }));
    setTimeout(() => {
      setState((state) => ({
        isToggled: false,
        fadeAnimation: "fade-out",
        moveAnimation: "move-down",
      }));
    }, 350);
  };

  return {
    state,
    setToggled,
    setUntoggled,
  };
};

export default useToggle;
