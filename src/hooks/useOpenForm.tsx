import { useState } from "react";

const OPEN_SEQUENCE = ["uniqueNumber", "cardIssuer", "expirationDate", "cvcNumber", "password"] as const;

type FormKeyType = (typeof OPEN_SEQUENCE)[number];

const useOpenForm = () => {
  const [openForm, setOpenForm] = useState({
    uniqueNumber: true,
    cardIssuer: false,
    expirationDate: false,
    cvcNumber: false,
    password: false,
  });

  const openNextForm = (currentForm: FormKeyType) => {
    const nextForm = checkNextForm(currentForm);
    const updatedOpenForm = { ...openForm };
    updatedOpenForm[nextForm] = true;
    setOpenForm(updatedOpenForm);
  };

  const checkNextForm = (currentForm: FormKeyType): FormKeyType => {
    return OPEN_SEQUENCE[OPEN_SEQUENCE.indexOf(currentForm) + 1];
  };

  const isFormOpened = (currentForm: FormKeyType) => {
    return openForm[currentForm];
  };

  return { isFormOpened, openNextForm, openForm };
};

export default useOpenForm;
