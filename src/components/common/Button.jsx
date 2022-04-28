const Button = ({ className, theme, children }) => {
  return <button className={`button-box ${className} font-${theme}`}>{children}</button>;
};

export default Button;
