import "./dot.css";

const Dot = ({ dotClass }) => {
  return (
    <div className={`dot-container ${dotClass}`}>
      <div className="dot" />
    </div>
  );
};

export default Dot;
