import "./colorBox.css";

const ColorBox = ({ colorType, cardType, idx, onClickCardType }) => {
  return (
    <div className="color-box-container">
      <div
        className={`${colorType} color-box`}
        onClick={() => onClickCardType(idx)}
      />
      <div className="color-box-text">{cardType}</div>
    </div>
  );
};

export default ColorBox;
