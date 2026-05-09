import { useLocation } from "react-router";

export default function CardCreateDonePage() {
  const { cardNumber } = useLocation().state;
  return <div>Card Create Done</div>;
}
