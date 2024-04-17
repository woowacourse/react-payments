import { CSSProperties } from "react";

const Card = () => {
  const cardStyle: CSSProperties = {
    backgroundColor: "#333333",
    borderRadius: "4px",

    width: "212px",
    height: "132px",
    boxShadow: "3px 3px 5px 0px #00000040",
    position: "relative",
  };

  const ICChipStyle: CSSProperties = {
    width: "36px",
    height: "22px",
    top: "8px",
    left: "12px",
    gap: "0px",
    border: "0.5px 0px 0px 0px",
    opacity: "0px",
    backgroundColor: "#DDCD78",
    borderRadius: "2px",
    position: "absolute",
  };

  return (
    <div style={cardStyle}>
      <div style={ICChipStyle}></div>
    </div>
  );
};

export default Card;
