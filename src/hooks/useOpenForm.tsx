import { useState } from "react";

const OPEN_SEQUENCE = ["uniqueNumber", "cardIssuer", "expirationDate", "cvcNumber", "password"];

const useOpenForm = () => {
  const [openForm, setOpenForm] = useState(OPEN_SEQUENCE.map((_) => false));

  const openNextForm = (currentForm: string) => {
    const currentFormSequence = OPEN_SEQUENCE.indexOf(currentForm);

    setOpenForm((prev) => prev.map((openForm, sequence) => (sequence === currentFormSequence + 1 ? true : openForm)));
  };

  const isFormOpen = (form: string) => {
    const sequence = OPEN_SEQUENCE.indexOf(form);
    return openForm[sequence];
  };

  return { openNextForm, isFormOpen };
};

export default useOpenForm;
