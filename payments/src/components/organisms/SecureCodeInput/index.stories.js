import SecureCodeInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "SecureCodeInput",
  component: SecureCodeInput,
};

export const SecureCode = () => {
  const {
    cardInfo: { secureCode },
    dispatch,
  } = useCard();
  return (
    <SecureCodeInput
      secureCodeValue={secureCode}
      onChangeSecureCode={dispatch}
    />
  );
};
