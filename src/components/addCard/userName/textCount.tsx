import { useEffect } from "react";
import { INPUT_TYPE } from "../../../constants/inputInfo";
import { useCountText } from "../../../hooks/useCountText";
import { useUserName } from "../../../hooks/useUserName";

export function renderCountText() {
  const { count, countText } = useCountText();
  const { userName } = useUserName();
  useEffect(() => {
    countText(userName);
  }, [userName]);
  return (
    <div>
      {count}/{INPUT_TYPE.MAX_LENGTH}
    </div>
  );
}
