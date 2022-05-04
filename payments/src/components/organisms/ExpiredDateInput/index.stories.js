import ExpiredDateInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "ExpiredDateInput",
  component: ExpiredDateInput,
};

export const ExpiredDate = () => {
  const [form, dispatch] = useCard();

  const { expiredDate } = form;

  return <ExpiredDateInput state={expiredDate} updateForm={dispatch} />;
};
