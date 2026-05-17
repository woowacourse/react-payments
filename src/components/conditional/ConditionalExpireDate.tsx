import { useCardBrandContext } from "../../context/cardBrand/CardBrandContext";
import { canShowExpireDate } from "../../utils/validators";
import ExpireDate from "../cardInfo/expireDate/ExpireDate";

export default function ConditionalExpireDate({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardBrandContext = useCardBrandContext();
  const validation = canShowExpireDate(cardBrandContext);

  return (
    <>
      {validation && (
        <>
          {children}
          <ExpireDate />
        </>
      )}
    </>
  );
}
