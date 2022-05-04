import { CardInfoContext } from "contexts/CardInfoProvider";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isCardInfo } from "types/cardInfo";

function useGetCardInfo() {
  const location = useLocation();
  const { cardInfo, pullCardInfo } = useContext(CardInfoContext);

  useEffect(() => {
    if (location.state) {
      if (!isCardInfo(location.state)) return;
      const clickedCardInfo = location.state;

      pullCardInfo(clickedCardInfo);
    }
  }, []);

  return { cardInfo };
}

export default useGetCardInfo;
