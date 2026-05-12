import { css } from "@emotion/react";
import completeCheck from "../assets/completeCheck.png";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const CardComplete = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const numbers: string[] = state?.numbers ?? [];
  const brand: string = state?.brand ?? "";

  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: auto;
        gap: 25px;
        padding: 30px;
      `}
    >
      <img
        src={completeCheck}
        alt="카드등록 완료"
        css={css`
          width: 76px;
          aspect-ratio: 1 / 1;
        `}
      ></img>
      <p
        css={css`
          font-weight: 700;
          font-size: 25px;
          text-align: center;
        `}
      >
        {numbers[0]}로 시작하는 <br />
        {brand} 카드가 등록되었어요.
      </p>
      <Button onClick={() => navigate("/")}>확인</Button>
    </div>
  );
};

export default CardComplete;
