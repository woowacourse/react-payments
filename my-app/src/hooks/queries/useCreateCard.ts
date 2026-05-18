import { useState } from "react";

import { createCard } from "../../apis/cards";
import type { ApiError } from "../../apis/cards";
import type { CardInfo } from "../../types";

import { toCreateCardRequest } from "../../utils/cardMapper";
import { toFieldError } from "../../utils/apiErrorField";
import { tryCatch } from "../../utils/tryCatch";

type CreateCardState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: { id: string }}
  | { status: "error"; field: string; message: string };

export const useCreateCard = () => {
  const [state, setState] = useState<CreateCardState>({ status: "idle" });

  const submit = async (cardInfo: CardInfo) => {
    setState({ status: "loading" });

    return await tryCatch(
      async () => {
        const data = await createCard(toCreateCardRequest(cardInfo));
        setState({ status: "success", data });
        return { status: "success" as const };
      },
      (error) => {
        const { field, message } = toFieldError(error as ApiError);
        setState({ status: "error", field, message });
        return { status: "error" as const };
      },
    );
  };
  return { state, submit };
};
