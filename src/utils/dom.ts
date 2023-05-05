export const isInputElement = (target: unknown): target is HTMLInputElement =>
  target instanceof HTMLInputElement;

export const composeEventHandlers: <E>(
  externalEventHandler?: (event: E) => void,
  innerEventHandler?: (event: E) => void
) => (event: E) => void = (externalEventHandler, innerEventHandler) => {
  return (event) => {
    externalEventHandler?.(event);
    innerEventHandler?.(event);
  };
};
