import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCardList from "./useCardList";
import { PATHS } from "src/utils/constant";
import { CardInfoContext } from "src/context/CardInfoContext";

function useSaveNickName() {
  const navigation = useNavigate();
  const [cardInfo, dispatch] = useContext(CardInfoContext);
  const { cardName, cardNumbers, ownerName, expireDate, nickName } = cardInfo;
  const { saveCard } = useCardList({ key: "card-list" });

  useEffect(() => {
    if (!cardInfo.securityCode.length) {
      alert("잘못된 접근입니다. 보유 카드로 이동합니다.");
      navigation(PATHS.cardList);
    }
  }, []);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (dispatch) {
      dispatch({ type: "nickName", payload: event.target.value });
    }
  };

  const registerCard: React.MouseEventHandler<HTMLButtonElement> = () => {
    saveCard({ ...cardInfo });
    navigation(PATHS.registerFinished);
  };

  return {
    cardName,
    cardNumbers,
    ownerName,
    expireDate,
    nickName,
    onChange,
    registerCard,
  };
}

export default useSaveNickName;
