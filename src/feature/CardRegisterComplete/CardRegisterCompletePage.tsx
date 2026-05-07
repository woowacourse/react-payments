import { useLocation } from "react-router-dom";

const CardRegisterCompletePage = () => {
  const location = useLocation();
  const { firstCardNumberChunk, cardCompany } = location.state;

  return (
    <div>
      {firstCardNumberChunk} {cardCompany}
    </div>
  );
};

export default CardRegisterCompletePage;
