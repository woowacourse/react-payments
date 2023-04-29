import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { CardInfoContext } from "../components/provider/CardInfoProvider";

interface FormData {
  [k: string]: FormDataEntryValue;
}

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

const setData = (formData: FormData, dataName: string) => {
  const dataInLocalStorage = Object.keys(localStorage).filter((key) =>
    key.startsWith(dataName)
  );

  localStorage.setItem(
    `${dataName}${dataInLocalStorage.length}`,
    JSON.stringify(formData)
  );
};

export default useSetCardInfo;
