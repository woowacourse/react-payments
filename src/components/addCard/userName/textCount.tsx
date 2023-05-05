import { useEffect } from "react";
import { INPUT_TYPE } from "../../../constants/inputInfo";
import { useCardInfoContext } from "../../../hooks/useCardInfoContext";
import { useCountText } from "../../../hooks/useCountText";

export function renderCountText() {
  const { count, countText } = useCountText();
  const { userName } = useCardInfoContext();
  useEffect(() => {
    countText(userName);
  }, [userName]);
  return (
    <div>
      {count}/{INPUT_TYPE.MAX_LENGTH}
    </div>
  );
}
