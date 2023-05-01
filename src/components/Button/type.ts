export type ButtonProps = {
  text: string;
  disabled: boolean;
  type: 'button' | 'submit' | 'reset';
  handleClick: () => void;
};

export type ButtonStyleProps = {
  disabled: boolean;
};
