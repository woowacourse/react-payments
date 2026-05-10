import { useCardNumberContext } from "../../context/cardNumber/CardNumberContext";
import CardBrand from "../cardInfo/cardBrand/CardBrand";
import { canShowCardBrand } from "../../utils/validators";

export default function ConditionalCardBrand() {
  const cardNumberContext = useCardNumberContext();
  const validation = canShowCardBrand(cardNumberContext);
  return <>{validation && <CardBrand />}</>;
}
