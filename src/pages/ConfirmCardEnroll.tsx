import { useLocation } from "react-router-dom";

export default function ConfirmCardEnroll() {
  const {
    state: { cardCompany, firstCardNumber },
  } = useLocation();

  return (
    <div id="confirmCardEnroll">
      <h1>
        {cardCompany} , {firstCardNumber}
      </h1>
    </div>
  );
}
