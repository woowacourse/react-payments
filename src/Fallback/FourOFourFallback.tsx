import Fallback from "@/components/Fallback/Fallback";
import { useNavigate } from "react-router-dom";

function FourOFourFallback() {
  const navigate = useNavigate();

  const handleFallbackButtonClick = () => {
    navigate("/");
  };

  return (
    <Fallback
      message="잘못된 접근입니다."
      buttonText="홈으로 돌아가기"
      onButtonClick={handleFallbackButtonClick}
    />
  );
}
export default FourOFourFallback;
