import { useExpireDateContext } from "../../context/expireDate/ExpireDateContext";
import Cvc from "../cardInfo/cvc/Cvc";
import { canShowCvc } from "../../utils/validators";

export default function ConditionalCvc() {
  const expireDateContext = useExpireDateContext();
  const validation = canShowCvc(expireDateContext);

  return <>{validation && <Cvc />}</>;
}
