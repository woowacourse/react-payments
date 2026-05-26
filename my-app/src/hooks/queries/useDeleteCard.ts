import { useState } from "react";

import type { ApiError } from "../../apis/cards";

import { deleteCard } from "../../apis/cards";
import { tryCatch } from "../../utils/tryCatch";

type DeleteState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success" }
  | { status: "error"; error: ApiError };

export const useDeleteCard = () => {
  const [state, setState] = useState<DeleteState>({ status: "idle" });

  const remove = async (id: string) => {
    setState({ status: "loading" });

    await tryCatch(
      async () => {
        await deleteCard(id);
        setState({ status: "success" });
      },
      (error) => setState({ status: "error", error: error as ApiError }),
    );
  };
  return { state, remove };
};
