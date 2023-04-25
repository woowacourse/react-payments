import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData } from "utils/formDataGetter";

interface FormData {
  [k: string]: FormDataEntryValue;
}

const useSetFormData = (
  isValidInfo: (data: FormData) => boolean,
  dataName: string
) => {
  const navigate = useNavigate();

  const handleFormData = (event: FormEvent) => {
    event.preventDefault();

    const formData = getFormData(event.target);
    if (!formData) return;

    if (isValidInfo(formData)) {
      setData(formData, dataName);

      navigate("/");
    } else {
      alert("값을 모두 입력해 주세요.");
    }
  };

  return { handleFormData };
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

export default useSetFormData;
