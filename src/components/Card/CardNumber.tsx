import "./CardNumber.css";

export default function CardNumber() {
  // TODO : props로 변경
  const year = "23";
  const month = "12";
  return (
    <div className="card-layout-number-container">
      <div className="card-layout-number-wrapper">
        <div className="card-layout-number">1111</div>
        <div className="card-layout-number">2222</div>
        <div className="card-layout-number">····</div>
        <div className="card-layout-number">····</div>
      </div>
      <div className="card-layout-expiration-number">
        {year}/{month}
      </div>
    </div>
  );
}
