import React, { useEffect, useState } from "react";

import Input from "../../common/Input";

export default function CardNameForm() {
  const [isNextButtonShown, setIsNextButtonShown] = useState(false);
  const [cardName, setCardName] = useState("");

  const onChangeCardName = e => {
    setCardName(e.target.value);
  };

  useEffect(() => {
    if (cardName.length > 0) {
      setIsNextButtonShown(true);

      return;
    }
    setIsNextButtonShown(false);
  }, [cardName]);

  return (
    <form
      className="card-name-form h-100"
      onSubmit={e => {
        e.preventDefault();
        // 서버에 모든 정보 저장
        // 카드 목록으로 넘어감
      }}
    >
      <Input
        shape="input-underline"
        placeholder="카드 이름을 입력해주세요."
        size="large"
        required
        type="text"
        maxLength={10}
        value={cardName}
        onChange={onChangeCardName}
      ></Input>
      {isNextButtonShown && (
        <button type="submit" className="submit-button card-name-form-button">
          확인
        </button>
      )}
    </form>
  );
}
