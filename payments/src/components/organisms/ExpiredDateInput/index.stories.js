import ExpiredDateInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "ExpiredDateInput",
  component: ExpiredDateInput,
};

export const ExpiredDate = () => {
  const { cardInfo, updateCard } = useCard();

  const { expiredDate } = cardInfo;

  return (
    <ExpiredDateInput
      expiredDateValue={expiredDate}
      onChangeExpiredDate={updateCard}
    />
  );
};
