import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

const useSpinner = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const navigateAfterLoading = (page: string) => {
    setTimeout(() => navigate(page), 2000);
    return <Spinner />;
  };

  return { isLoading, setIsLoading, navigateAfterLoading };
};

export default useSpinner;
