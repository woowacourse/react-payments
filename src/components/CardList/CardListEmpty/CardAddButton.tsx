import Button from "@/components/common/Button";
import { ROUTE_PATH } from "@/constants/routes";
import { useNavigate } from "react-router";

const CardAddButton = () => {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate(ROUTE_PATH.CARD_REGISTER);
  };

  return (
    <Button type="button" onClick={handleAddButtonClick}>
      카드 추가하기
    </Button>
  );
};

export default CardAddButton;
