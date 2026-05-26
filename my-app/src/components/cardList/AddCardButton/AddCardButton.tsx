import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";
import PrimaryButton from "../../common/PrimaryButton/PrimaryButton";

type Props = {
  variant: "primary" | "outline";
};

const AddCardButton = ({ variant }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(ROUTES.CARD_FORM);

  if (variant === "primary") {
    return <PrimaryButton onClick={handleClick}>카드 추가하기</PrimaryButton>;
  }

  return <button onClick={handleClick}>+ 카드 추가</button>;
};

export default AddCardButton;
