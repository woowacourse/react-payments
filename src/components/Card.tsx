import { CSSProperties } from "react";
import { IMAGE_URL } from "../constants";

const Card = ({
  cardNumbers,
  date,
  ownerName,
}: {
  cardNumbers: string[];
  date: Record<string, string>;
  ownerName: string;
}) => {
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
      <div>
        {cardNumbers.map((cardNumber, i) => (
          <span
            style={{
              color: "white",
              width: "20ch",
            }}
          >
            {i >= cardNumbers.length / 2
              ? "•".repeat(cardNumber.toString().length)
              : cardNumber}
          </span>
        ))}
      </div>
      <div>
        {Object.values(date).map((date) => (
          <span style={{ color: "white" }}>{date}</span>
        ))}
      </div>
      <div>
        <span style={{ color: "white" }}>{ownerName}</span>
      </div>
      <img src={IMAGE_URL.visa} style={}></img>
    </div>
  );
};

export default Card;
