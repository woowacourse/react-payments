import { useState } from "react";

export function useSelectId() {
  const [selectedId, setSelectedId] = useState<number>(0);

  function selectId(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget as HTMLElement;
    setSelectedId(Number(target.id));
  }

  return { selectedId, selectId: selectId };
}
