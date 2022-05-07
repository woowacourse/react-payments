import Card from "components/add/Card";
import Input from "components/common/Input";
import { PATH } from "constant/path";
import { CardInfoContext } from "contexts/CardInfoProvider";
import useGetCardInfo from "hooks/useGetCardInfo";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardInfo } from "types/cardInfo";

interface CompleteProps {
  addCard: (cardInfo: CardInfo) => void;
  editCard: (id: number, partialCardInfo: Partial<CardInfo>) => void;
}

export default function Complete({ addCard, editCard }: CompleteProps) {
  const navigate = useNavigate();
  const { resetCardInfo, onChangeCardName } = useContext(CardInfoContext);
  const { cardInfo } = useGetCardInfo();

  const requestPattern = {
    add: {
      requestFunction: addCard as any,
      requestBody: [cardInfo],
    },
    edit: {
      requestFunction: editCard as any,
      requestBody: [cardInfo.id, { cardName: cardInfo.cardName }],
    },
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { requestFunction, requestBody } = requestPattern[cardInfo.id ? "edit" : "add"];

    await requestFunction(...requestBody);

    resetCardInfo();
    navigate(PATH.HOME);
  };

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
