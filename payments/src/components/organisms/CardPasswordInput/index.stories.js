import CardPasswordInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export const CardPassword = () => {
  const { cardInfo, dispatch } = useCard();
  const { password } = cardInfo;

  return (
    <CardPasswordInput passwordValue={password} onChangePassword={dispatch} />
  );
};
