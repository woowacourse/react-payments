import { useCallback, useContext } from "react";
import { STATE_KEY } from "../constants";
import AppContext from "../contexts/appContext";

const useCardNickName = () => {
  const { cardState, setCardStateByKey } = useContext(AppContext);

  const cardNickName = cardState[STATE_KEY.CARD_NICK_NAME];

  const setCardNickNameState = useCallback(
    (cardNickName) => {
      setCardStateByKey(STATE_KEY.CARD_NICK_NAME, cardNickName);
    },
    [setCardStateByKey]
  );

  const onCardNickNameInputChange = useCallback(
    (event) => {
      const { value } = event.target;
      setCardNickNameState(value);
    },
    [setCardNickNameState]
  );

  return {
    cardNickName,
    onCardNickNameInputChange,
  };
};

export default useCardNickName;
