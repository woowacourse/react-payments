const Button = ({ className, theme, children }) => {
  return (
    <button className={`button-box ${className}`} style={{ color: theme }}>
      {children}
    </button>
  );
};

export default Button;
