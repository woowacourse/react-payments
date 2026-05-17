import { useContext } from "react";

import SelectContext from "./SelectContext";

const useSelectContext = () => {
  const context = useContext(SelectContext);

  if (!context)
    throw new Error(
      "useSelectContext 훅은 Select 컴포넌트 내부에서만 사용할 수 있습니다.",
    );
  return context;
};

export default useSelectContext;
