import { CardBrandProvider } from "./cardBrand/CardBrandProvider";
import { CardNumberProvider } from "./cardNumber/CardNumberProvider";
import { CvcProvider } from "./cvc/CvcProvider";
import { ExpireDateProvider } from "./expireDate/ExpireDateProvider";

export default function PaymentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CardNumberProvider>
      <ExpireDateProvider>
        <CvcProvider>
          <CardBrandProvider>{children}</CardBrandProvider>
        </CvcProvider>
      </ExpireDateProvider>
    </CardNumberProvider>
  );
}
