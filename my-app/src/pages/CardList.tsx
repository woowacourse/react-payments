import { css } from "@emotion/react";
import Button from "../components/Button/Button";

const CardList = () => {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 40px 30px;
        border: 1.01px solid black;
      `}
    >
      <h1
        css={css`
          font-weight: 700;
          font-style: Bold;
          font-size: 18px;
          align-self: flex-start;
        `}
      >
        보유 카드
      </h1>

      <div
        css={css`
          width: 160px;
          height: 100px;
          background: #f5f5f5;
          border: 1px dashed #d9d9d9;
          border-radius: 5px;
        `}
      ></div>
      <h2>등록된 카드가 없습니다.</h2>
      <p>아래 버튼을 눌러 첫 카드를 등록해보세요</p>

      <Button>카드 추가하기</Button>
    </div>
  );
};

export default CardList;
