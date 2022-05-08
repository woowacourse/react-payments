import OwnerNameInput from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "OwnerNameInput",
  component: OwnerNameInput,
};

export const OwnerNameForm = () => {
  const { cardInfo, updateCard } = useCard();

  return (
    <OwnerNameInput
      ownerNameValue={cardInfo.ownerName}
      onChangeOwner={updateCard}
    />
  );
};
