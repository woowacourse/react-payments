import { Navigate, useLocation, useNavigate } from "react-router-dom";
import type { PublicCardInfo } from "../types";

const isPublicCardInfo = (value: unknown): value is PublicCardInfo => {
  return typeof value === "object" && value !== null && "numberHead" in value && "company" in value;
};

const CompletedPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!isPublicCardInfo(state)) {
    return <Navigate to="/" replace />;
  }

  const { numberHead, company } = state;

  return (
    <main>
      <div>
        {numberHead}로 시작하는 {company} 카드가 등록되었어요.
      </div>
      <button onClick={() => navigate("/")}>확인</button>
    </main>
  );
};

export default CompletedPage;
