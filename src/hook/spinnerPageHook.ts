import { useEffect, useState } from "react";
import { LOADING_TIME } from "../CONSTANT";
import { useNavigate } from "react-router-dom";

export const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading === false) {
      return;
    }

    navigate("/RegisterSpinnerPage");
    setTimeout(() => {
      setLoading(false);
      navigate("/CardNickInputPage");
    }, LOADING_TIME);
  }, [loading]);

  const startLoading = () => {
    setLoading(true);
  };

  return { startLoading };
};
