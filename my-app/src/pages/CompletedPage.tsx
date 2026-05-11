import { useLocation, useNavigate } from "react-router-dom";

import type { CardInfo } from "../types";

const CompletedPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { cardInfo } = state as { cardInfo: CardInfo };

  return (
    <main>
      <div>
        {cardInfo.numbers[0]}로 시작하는 {cardInfo.company} 카드가 등록되었어요.
      </div>
      <button onClick={() => navigate("/")}>확인</button>
    </main>
  );
};

export default CompletedPage;
