import { usePasswordContext } from "../../context/password/PasswordContext";
import { canShowSendButton } from "../../utils/validators";
import SendButton from "../sendButton/SendButton";

export default function ConditionalSendButton() {
  const passwordContext = usePasswordContext();
  const validation = canShowSendButton(passwordContext);

  return <>{validation && <SendButton />}</>;
}
