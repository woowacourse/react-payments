const Button = ({ className, theme, children, onClick }) => {
  return (
    <button className={`button-box ${className} font-${theme}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
