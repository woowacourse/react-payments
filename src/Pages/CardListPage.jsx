import React from "react";

export default function CardListPage({ setPage }) {
  return (
    <div>
      <button onClick={() => setPage("CardAdd")}>카드 추가하기</button>
    </div>
  );
}
