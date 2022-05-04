import API from "apis";
import Card from "components/add/Card";
import Input from "components/common/Input";
import { PATH } from "constant/path";
import { CardInfoContext } from "contexts/CardInfoProvider";
import { CardsContext } from "contexts/CardsProvider";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardInfo } from "types/cardInfo";

const isCardInfo = (value: any): value is CardInfo => {
  if ("cardType" in value) return true;

  return false;
};

export default function Complete() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cardInfo, pullCardInfo, resetCardInfo, onChangeCardName } = useContext(CardInfoContext);
  const { cards, setCards } = useContext(CardsContext);

  useEffect(() => {
    if (location.state) {
      if (!isCardInfo(location.state)) return;
      const clickedCardInfo = location.state;

      pullCardInfo(clickedCardInfo);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id, cardName } = cardInfo;

    if (id) {
      await API.editCard(id, { cardName });
      setCards(cards =>
        cards.map(card => {
          if (card.id === id) {
            return { ...card, cardName };
          }

          return card;
        })
      );
    } else {
      const cardInfoWIthId = { ...cardInfo, id: cards.length + 1 };

      await API.addCard(cardInfoWIthId);
      setCards(cards => [...cards, cardInfoWIthId]);
    }

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
