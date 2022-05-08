import SecureCodeInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "SecureCodeInput",
  component: SecureCodeInput,
};

export const SecureCode = () => {
  const {
    cardInfo: { secureCode },
    updateCard,
  } = useCard();
  return (
    <SecureCodeInput
      secureCodeValue={secureCode}
      onChangeSecureCode={updateCard}
    />
  );
};
