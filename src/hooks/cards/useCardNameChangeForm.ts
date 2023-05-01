import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCardListContext } from "../../contexts/CardListContext";
import { PATH } from "../../constants";

const useCardNameChangeForm = (id: number) => {
  const { updateCardName } = useCardListContext();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!(event.currentTarget.elements[0] instanceof HTMLInputElement)) return;

    updateCardName(id, event.currentTarget.elements[0].value);
    navigate(PATH.ROOT);
  };

  return { handleSubmit };
};

export { useCardNameChangeForm };
