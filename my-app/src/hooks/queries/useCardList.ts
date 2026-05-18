import { useState, useEffect } from "react";

import type { CardListItem, ApiError } from "../../apis/cards";

import { getCards } from "../../apis/cards";
import { tryCatch } from "../../utils/tryCatch";

type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: ApiError };

export const useCardList = () => {
  const [state, setState] = useState<AsyncState<CardListItem[]>>({ status: "loading" });

  const loadCards = () => {
    const ignore = { current: false };

    tryCatch(
      async () => {
        const data = await getCards();
        if (!ignore.current) setState({ status: "success", data });
      },
      (error) => {
        if (!ignore.current) setState({ status: "error", error: error as ApiError });
      },
    );

    return () => { ignore.current = true; };
  };

  useEffect(() => loadCards(), []);

  const retry = () => {
    setState({ status: "loading" });
    loadCards();
  };

  return { state, retry };
};
