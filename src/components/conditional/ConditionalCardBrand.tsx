import { useCardNumberContext } from "../../context/cardNumber/CardNumberContext";
import CardBrand from "../cardInfo/cardBrand/CardBrand";
import { canShowCardBrand } from "../../utils/validators";

export default function ConditionalCardBrand({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardNumberContext = useCardNumberContext();
  const validation = canShowCardBrand(cardNumberContext);
  return (
    <>
      {validation && (
        <>
          {children}
          <CardBrand />
        </>
      )}
    </>
  );
}
