import "./colorBox.css";

const ColorBox = ({ colorType, cardType }) => {
  return (
    <div className="color-box-container">
      <div className={`${colorType} color-box`} />
      <div className="color-box-text">{cardType}</div>
    </div>
  );
};

export default ColorBox;
