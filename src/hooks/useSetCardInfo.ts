import { CardInfoContext } from "../components/CardInfoProvider";
import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
  [k: string]: FormDataEntryValue;
}

const useSetCardInfo = (dataName: string) => {
  const allCardInfo = useContext(CardInfoContext).cardInfo;
  const navigate = useNavigate();

  const handleFormDataSubmit = (event: FormEvent) => {
    event.preventDefault();

    setData(allCardInfo, dataName);
    navigate("/completion");
  };

  return { handleFormDataSubmit };
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
