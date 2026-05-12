import Button from "@components/common/Button";
import { useNavigate } from "react-router";

const GoHomeButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <Button rounded fullWidth onClick={handleClick}>
      확인
    </Button>
  );
};

export default GoHomeButton;
