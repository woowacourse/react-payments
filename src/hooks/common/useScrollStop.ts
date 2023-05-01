import { useEffect } from "react";
import type { RefObject } from "react";

type BodyRef = { current: HTMLElement };

const useScrollStop = (
  shouldStop: boolean,
  ref: BodyRef | RefObject<HTMLElement> = { current: document.body }
) => {
  useEffect(() => {
    const node = ref.current;

    if (node) node.classList.add("hide-overflow");

    return () => {
      if (node) node.classList.remove("hide-overflow");
    };
  }, [ref, shouldStop]);
};

export { useScrollStop };
