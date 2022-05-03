import "./dot.css";
import { useMemo } from "react";

const Dot = ({ dotClass }) => {
  const dotStyle = useMemo(() => {
    return {
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: dotClass === "card-number" ? "#616161" : "#04c09e",
    };
  }, [dotClass]);

  return (
    <div className={`${dotClass} flex-center`}>
      <div style={dotStyle} />
    </div>
  );
};

export default Dot;
