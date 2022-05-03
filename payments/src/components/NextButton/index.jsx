import Button from "../elements/Button";
import "./index.scss";

const NextButton = ({ children, onClick }) => {
  return (
    <div className="next--button">
      <Button onClick={onClick}>{children}</Button>
    </div>
  );
};

export default NextButton;
