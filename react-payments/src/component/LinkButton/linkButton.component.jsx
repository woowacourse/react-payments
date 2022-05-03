import "./linkButton.css";

const LinkButton = ({ children, linkClass }) => {
  return <div className={linkClass}>{children}</div>;
};

export default LinkButton;
