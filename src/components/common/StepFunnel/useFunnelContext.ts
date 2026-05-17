import { useContext } from "react";

import FunnelContext from "./FunnelContext";

const useFunnelContext = () => {
  const context = useContext(FunnelContext);

  if (!context)
    throw new Error(
      "useFunnelContext 훅은 Funnel 컴포넌트 내부에서만 사용할 수 있습니다.",
    );
  return context;
};

export default useFunnelContext;
