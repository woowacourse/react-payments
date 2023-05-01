import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PATHS } from "src/utils/constant";

function useHeaderState() {
  const location = useLocation();
  const [headProps, setHeadProps] = useState({
    text: "보유카드",
    backButton: false,
  });

  useEffect(() => {
    const currentPath = location.pathname;
    switch (currentPath) {
      case PATHS.cardList:
        setHeadProps({ text: "보유카드", backButton: false });
        break;
      case PATHS.cardRegister:
        setHeadProps({ text: "카드 추가", backButton: true });
        break;
      default:
        setHeadProps({ text: "보유카드", backButton: false });
        break;
    }
  }, [location]);

  return { headProps };
}

export default useHeaderState;
