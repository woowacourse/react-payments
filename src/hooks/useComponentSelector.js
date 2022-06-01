import { useState } from "react";

export const useComponentSelector = () => {
  const [selected, setSelected] = useState(0);
  const showNextComponent = () => {
    setSelected((prev) => prev + 1);
  };
  const showPrevComponent = () => {
    setSelected((prev) => prev - 1);
  };

  return [selected, showNextComponent, showPrevComponent];
};
