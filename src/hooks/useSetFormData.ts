import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getFormData } from "utils/formDataGetter";

interface FormData {
  [k: string]: FormDataEntryValue;
}

const useSetFormData = (isValidInfo: (data: FormData) => boolean) => {
  const navigate = useNavigate();

  const handleFormData = (event: FormEvent) => {
    event.preventDefault();

    const formData = getFormData(event.target);
    if (!formData) return;

    if (isValidInfo(formData)) {
      setCards(formData);

      navigate("/");
    } else {
      alert("값을 모두 입력해 주세요.");
    }
  };

  return { handleFormData };
};

const setCards = (formData: FormData) => {
  const registeredCards = Object.keys(localStorage).filter((key) =>
    key.startsWith("card")
  );

  localStorage.setItem(
    `card${registeredCards.length}`,
    JSON.stringify(formData)
  );
};

export default useSetFormData;
