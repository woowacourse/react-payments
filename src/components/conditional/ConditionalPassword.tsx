import { useCvcContext } from "../../context/cvc/CvcContext";
import { canShowPassword } from "../../utils/validators";
import Password from "../cardInfo/password/Password";

export default function ConditionalPassword({
  children,
}: {
  children: React.ReactNode;
}) {
  const cvcContext = useCvcContext();
  const validation = canShowPassword(cvcContext);
  return (
    <>
      {validation && (
        <>
          {children}
          <Password />
        </>
      )}
    </>
  );
}
