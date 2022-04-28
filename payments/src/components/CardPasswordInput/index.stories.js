import CardPasswordInput from ".";
import useCard from "../../hooks/useCard";

export default {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export const CardPassword = () => {
  const [form, dispatch] = useCard();
  const { password } = form;

  return <CardPasswordInput state={password} updateForm={dispatch} />;
};
