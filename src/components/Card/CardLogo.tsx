import "./CardLogo.css";

export default function CardLogo() {
  return (
    <div className="card-logo">
      {/* TODO : 이미지 경로 props로 수정 */}
      <img className="card-logo-image" src="./master-logo.png" alt="로고"></img>
    </div>
  );
}
