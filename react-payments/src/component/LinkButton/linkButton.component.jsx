import "./linkButton.css";

const LinkButton = ({ linkLabel, linkClass }) => {
  return <div className={linkClass}>{linkLabel}</div>;
};

export default LinkButton;
