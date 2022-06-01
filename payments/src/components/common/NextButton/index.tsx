import "./index.scss";

interface NextButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  testId?: string;
}

const NextButton = ({ children, onClick, testId }: NextButtonProps) => {
  return (
    <div className="next--button">
      <button onClick={onClick} data-testid={testId}>
        {children}
      </button>
    </div>
  );
};

export default NextButton;
