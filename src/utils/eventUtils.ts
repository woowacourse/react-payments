import type { SyntheticEvent } from "react";

const isElementOfType = <T extends Element>(
  event: SyntheticEvent
): event is { target: T } & SyntheticEvent => {
  const { target } = event;

  return target instanceof Element;
};

export { isElementOfType };
