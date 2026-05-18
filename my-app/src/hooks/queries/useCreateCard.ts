import { useState } from "react";

import type { ApiError } from "../../apis/cards";
import type { CardInfo } from "../../types";

import { createCard } from "../../apis/cards";
import { toCreateCardRequest } from "../../utils/cardMapper";
import { toFieldError } from "../../utils/apiErrorField";
import { tryCatch } from "../../utils/tryCatch";

type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; field: string; message: string };

export const useCreateCard = () => {
  const [state, setState] = useState<AsyncState<{ id: string }>>({ status: "idle" });

  const submit = async (cardInfo: CardInfo) => {
    setState({ status: "loading" });

    await tryCatch(
      async () => {
        const request = toCreateCardRequest(cardInfo);
        const data = await createCard(request);
        setState({ status: "success", data });
      },
      (error) => {
        const { field, message } = toFieldError(error as ApiError);
        setState({ status: "error", field, message });
      },
    );
  };
  return { state, submit };
};
