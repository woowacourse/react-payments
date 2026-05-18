import Button from "@components/common/Button";
import { useNavigate } from "react-router";

const GoCardsButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cards");
  };

  return (
    <Button rounded fullWidth onClick={handleClick}>
      확인
    </Button>
  );
};

export default GoCardsButton;
