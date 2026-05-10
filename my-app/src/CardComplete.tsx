import { css } from "@emotion/react";
import completeCheck from "./assets/completeCheck.png";
import { useLocation } from "react-router-dom";

const CardComplete = () => {
  const { state } = useLocation();
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
      <span
        css={css`
          font-weight: 700;
          font-size: 25px;
          text-align: center;
        `}
      >
        {numbers[0]}로 시작하는 <br />
        {brand} 카드가 등록되었어요.
      </span>
      <button
        css={css`
          width: 100%;
          background: #333333;
          color: #f3f3f3;
          height: 44px;
          border-radius: 5px;
          font-size: 15px;
          font-weight: 700;
        `}
      >
        확인
      </button>
    </div>
  );
};

export default CardComplete;
