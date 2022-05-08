import "./index.scss";

const NextButton = ({ children, onClick, testId }) => {
  return (
    <div className="next--button">
      <button onClick={onClick} data-testid={testId}>
        {children}
      </button>
    </div>
  );
};

export default NextButton;
