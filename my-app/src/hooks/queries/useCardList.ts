import { useState, useEffect, useRef } from "react";

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
  const ignoreRef = useRef(false);

  const loadCards = () => {
    ignoreRef.current = false;

    tryCatch(
      async () => {
        const data = await getCards();
        if (!ignoreRef.current) setState({ status: "success", data });
      },
      (error) => {
        if (!ignoreRef.current) setState({ status: "error", error: error as ApiError });
      },
    );
  };

  useEffect(() => {
    loadCards();
    return () => { ignoreRef.current = true; };
  }, []);

  const retry = () => {
    setState({ status: "loading" });
    loadCards();
  };

  return { state, retry };
};
