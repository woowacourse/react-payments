import Card from "components/add/Card";
import Input from "components/common/Input";
import { CardInfoContext } from "contexts/CardInfoProvider";
import useCardInfoForm from "hooks/useCardInfoForm";
import React, { useContext } from "react";

export default function Complete() {
  const { cardInfo, onChangeCardName } = useContext(CardInfoContext);
  const { handleSubmit } = useCardInfoForm();

  return (
    <div className="flex-column-center">
      <div className="flex-center">
        <h2 className="complete-message mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card cardInfo={cardInfo} size="big" pointer={false} />
      <form className="card-name-form flex-column-center" onSubmit={handleSubmit}>
        <div className="input-container flex-center w-100">
          <Input
            type="text"
            className="input-underline"
            size="large"
            maxLength={10}
            placeholder="카드의 별칭을 입력해주세요."
            style={{ borderRadius: 0 }}
            onChange={onChangeCardName}
            value={cardInfo.cardName}
          />
        </div>
        <button type="submit" className="submit-button">
          확인
        </button>
      </form>
    </div>
  );
}
