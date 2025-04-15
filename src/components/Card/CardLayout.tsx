import "./CardLayout.css";
import CardLogo from "./CardLogo";
import CardNumber from "./CardNumber";

export default function CardLayout() {
  return (
    <div className="card-layout">
      <div className="card-chip"></div>
      <CardLogo />
      <CardNumber />
    </div>
  );
}
