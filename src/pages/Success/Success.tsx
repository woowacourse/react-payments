import { useNavigate } from "react-router-dom";
import {
  SuccessContainerCSS,
  SuccessImgCSS,
  SuccessTextCSS,
} from "./Success.styled";
import check from "/check.svg";
import Button from "../../components/Button/Button";
import { useCard } from "../../hooks/useCard";

function Success() {
  const { resetCard, cardNumbers, cardBrand } = useCard();

  const navigate = useNavigate();
  const handleClick = () => {
    resetCard();
    navigate("/");
  };
  return (
    <>
      <SuccessContainerCSS>
        <SuccessImgCSS src={check} />
        <SuccessTextCSS>
          <p>{cardNumbers.first}로 시작하는</p>
          <p>{cardBrand}가 등록되었어요.</p>
        </SuccessTextCSS>
        <Button variant="success" onClick={handleClick} />
      </SuccessContainerCSS>
    </>
  );
}
export default Success;
