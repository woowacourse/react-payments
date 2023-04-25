export type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
};

function Button({ text, type }: ButtonProps) {
  return <button type={type}>{text}</button>;
}

export default Button;
