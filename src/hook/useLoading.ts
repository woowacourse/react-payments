import { useEffect, useState } from "react";
import { LOADING_TIME } from "../constant/etc";
import { useNavigate } from "react-router-dom";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timerId;

    if (loading) {
      navigate("/RegisterSpinnerPage");

      timerId = setTimeout(() => {
        setLoading(false);
        navigate("/CardNickInputPage");
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
