import { useLocation, useNavigate } from "react-router-dom";

type CompletedState = {
  numberHead: string;
  company: string;
};

const CompletedPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { numberHead, company } = state as CompletedState;

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
