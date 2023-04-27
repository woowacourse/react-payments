import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData } from "utils/formDataObjectGetter";

interface FormData {
  [k: string]: FormDataEntryValue;
}

const useSetCardInfo = (dataName: string, cardCompany: string) => {
  const navigate = useNavigate();

  const handleFormDataSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = getFormData(event.target);
    if (!formData) return;

    const allCardInfo = { ...formData, cardCompany };

    setData(allCardInfo, dataName);
    navigate("/");
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
