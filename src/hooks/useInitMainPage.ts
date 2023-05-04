import { useNavigate } from "react-router-dom";

const useInitMainPage = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    navigate("/register");
  };

  return { goToRegister };
};

export default useInitMainPage;
