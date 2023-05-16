export type Story<T> = {
  (args: T): JSX.Element;
  args?: T;
  argTypes?: Record<string, unknown>;
  play?: (args: T) => Promise<void>;

};