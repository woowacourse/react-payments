import { useCallback, useEffect, useState } from "react";
import type { Card, FetchState } from "../types";

export function useCardList() {
  const [fetchState, setFetchState] = useState<FetchState>({
    status: "loading",
  });

  const fetchCards = useCallback(() => {
    fetch(`${import.meta.env.BASE_URL}cards`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data: Card[]) => setFetchState({ status: "success", data }))
      .catch(() => setFetchState({ status: "error" }));
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  const retry = () => {
    setFetchState({ status: "loading" });
    fetchCards();
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("카드를 삭제하시겠습니까?")) return;
    const res = await fetch(`${import.meta.env.BASE_URL}cards/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      alert("카드 삭제에 실패했습니다. 다시 시도해 주세요.");
      return;
    }
    setFetchState((prev) =>
      prev.status === "success"
        ? {
            status: "success",
            data: prev.data.filter((card) => card.id !== id),
          }
        : prev,
    );
  };

  return { fetchState, retry, handleDelete };
}
