import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CardInfoContext } from "../components/provider/CardInfoProvider";
import { setData } from "utils/setDataInLocalStorage";

const useSetCardInfo = (nickname: string, dataName: string) => {
  const cardInfo = useContext(CardInfoContext).cardInfo;
  const allCardInfo = { nickname, ...cardInfo };
  const [isCompleted, setIsCompleted] = useState(false);

  const navigate = useNavigate();

  const handleSave = () => {
    if (nickname === "") return alert("카드 별칭을 입력해 주세요.");

    setData(allCardInfo, dataName);
    setIsCompleted(true);

    setTimeout(() => {
      navigate("/");
    }, 1200);
  };

  return { handleSave, isCompleted };
};

export default useSetCardInfo;
