import { useState, useEffect } from "react";
import { CardInformationType, CardErrorType } from "../types/CardInformationType";

const OPEN_SEQUENCE = ["uniqueNumber", "cardIssuer", "expirationDate", "cvcNumber", "password"];

type UseOpenFormType = {
  cardState: CardInformationType;
  cardErrorState: CardErrorType;
  uniqueNumberComplete: () => boolean;
  expirationDateComplete: () => boolean;
  cvcNumberComplete: () => boolean;
  cardIssuerComplete: () => boolean;
  uniqueNumberClear: () => boolean;
  expirationDateClear: () => boolean;
  cvcNumberClear: () => boolean;
};

const useOpenForm = ({
  cardState,
  cardErrorState,
  uniqueNumberComplete,
  expirationDateComplete,
  cvcNumberComplete,
  cardIssuerComplete,
  uniqueNumberClear,
  expirationDateClear,
  cvcNumberClear,
}: UseOpenFormType) => {
  const [openForm, setOpenForm] = useState(OPEN_SEQUENCE.map((_) => false));

  const openNextForm = (currentForm: string) => {
    const currentFormSequence = OPEN_SEQUENCE.indexOf(currentForm);

    setOpenForm((prev) => prev.map((openForm, sequence) => (sequence === currentFormSequence + 1 ? true : openForm)));
  };

  const isFormOpen = (form: string) => {
    const sequence = OPEN_SEQUENCE.indexOf(form);
    return openForm[sequence];
  };

  const checkNextFormOpen = (currentForm: string) => {
    const nextFormSequence = OPEN_SEQUENCE.indexOf(currentForm) + 1;

    return openForm[nextFormSequence];
  };

  const formCheckers = [
    { key: "cvcNumber", clear: cvcNumberClear, complete: cvcNumberComplete, dependency: cardErrorState.cvcNumber },
    { key: "cardIssuer", clear: () => true, complete: cardIssuerComplete, dependency: cardState.cardIssuer },
    {
      key: "expirationDate",
      clear: expirationDateClear,
      complete: expirationDateComplete,
      dependency: cardErrorState.expirationDate,
    },
    {
      key: "uniqueNumber",
      clear: uniqueNumberClear,
      complete: uniqueNumberComplete,
      dependency: cardErrorState.uniqueNumber,
    },
  ];

  formCheckers.forEach(({ key, clear, complete, dependency }) => {
    useEffect(() => {
      if (!checkNextFormOpen(key) && clear() && complete()) {
        openNextForm(key);
      }
    }, [dependency]);
  });

  return { isFormOpen };
};

export default useOpenForm;
