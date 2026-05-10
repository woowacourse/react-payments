import { useCardBrandContext } from "../../context/cardBrand/CardBrandContext";
import { canShowExpireDate } from "../../utils/validators";
import ExpireDate from "../cardInfo/expireDate/ExpireDate";

export default function ConditionalExpireDate() {
  const cardBrandContext = useCardBrandContext();
  const validation = canShowExpireDate(cardBrandContext);

  return <>{validation && <ExpireDate />}</>;
}
