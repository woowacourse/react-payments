import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../components/common";
import Spinner from "../components/Spinner/Spinner";

const useSpinner = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
  };

  const navigateAfterLoading = (page: string) => {
    setTimeout(() => navigate(page), 2000);
    return (
      <Container>
        <Spinner />
      </Container>
    );
  };

  return { isLoading, startLoading, navigateAfterLoading };
};

export default useSpinner;
