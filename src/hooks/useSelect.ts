import { useState } from "react";

export function useSelect() {
  const [selectedItem, setSelectedItem] = useState<number>(-1);

  function selectItem(e: React.MouseEvent<HTMLElement>) {
    const target = e.currentTarget as HTMLDivElement;
    setSelectedItem(Number(target.id));
  }

  return { selectedItem, selectItem };
}
