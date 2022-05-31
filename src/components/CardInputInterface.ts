export interface OrderedInputUpdateHandlerInterface {
  (order: number): React.ChangeEventHandler<HTMLInputElement>;
}
