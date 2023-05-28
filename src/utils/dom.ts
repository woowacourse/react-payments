export const isInputElement = (target: unknown): target is HTMLInputElement =>
  target instanceof HTMLInputElement;

interface EventHandler<E> {
  (e: E): void;
}
interface ComposeEventHandlers {
  <E>(externalEventHandler?: EventHandler<E>, innerEventHandler?: EventHandler<E>): EventHandler<E>;
}

export const composeEventHandlers: ComposeEventHandlers = (externalEventHandler, innerEventHandler) => {
  return (event) => {
    externalEventHandler?.(event);
    innerEventHandler?.(event);
  };
};
