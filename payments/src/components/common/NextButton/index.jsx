import "./index.scss";

const NextButton = ({ children, onClick }) => {
  return (
    <div className="next--button">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default NextButton;
