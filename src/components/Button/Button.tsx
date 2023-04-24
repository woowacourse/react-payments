type ButtonProps = {
  type: 'submit' | 'button' | 'reset';
  children: string;
  className: string;
};

const Button = ({ type, children, ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
