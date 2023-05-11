import { useEffect, useState } from "react";
import { LOADING_TIME } from "../constant/etc";
import { useNavigate } from "react-router-dom";
import { LINK_KEYWORD } from "../constant/page";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timerId;

    if (loading) {
      navigate(LINK_KEYWORD.REGISTER_SPINNER);

      timerId = setTimeout(() => {
        setLoading(false);
        navigate(LINK_KEYWORD.CARD_INPUT_NICK);
      }, LOADING_TIME);
      return;
    }

    return clearTimeout(timerId);
  }, [loading]);

  const startLoading = () => {
    setLoading(true);
  };

  return { startLoading };
};
