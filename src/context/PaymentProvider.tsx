import { CardBrandProvider } from "./cardBrand/CardBrandProvider";
import { CardNumberProvider } from "./cardNumber/CardNumberProvider";
import { CvcProvider } from "./cvc/CvcProvider";
import { ExpireDateProvider } from "./expireDate/ExpireDateProvider";
import { PasswordProvider } from "./password/PasswordProvider";

export default function PaymentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CardNumberProvider>
      <ExpireDateProvider>
        <CvcProvider>
          <CardBrandProvider>
            <PasswordProvider>{children}</PasswordProvider>
          </CardBrandProvider>
        </CvcProvider>
      </ExpireDateProvider>
    </CardNumberProvider>
  );
}
