import OwnerNameInput from ".";
import useCard from "../../hooks/useCard";

export default {
  title: "OwnerNameInput",
  component: OwnerNameInput,
};

export const OwnerNameForm = () => {
  const [form, dispatch] = useCard();

  return <OwnerNameInput state={form.ownerName} updateForm={dispatch} />;
};
