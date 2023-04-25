import { useState } from "react";

function useTimeoutShow(interval: number) {
  const [isShow, setIsShow] = useState(false);

  const showForIntervals = () => {
    setIsShow(true);
    setTimeout(() => setIsShow(false), interval);
  };

  return { isShow, showForIntervals };
}

export default useTimeoutShow;
