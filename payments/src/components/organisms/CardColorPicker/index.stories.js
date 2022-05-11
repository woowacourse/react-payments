import { useState } from "react";
import CardColorPicker from ".";
import useCard from "../../../hooks/useCard";

export default {
  title: "ColorPicker",
  component: CardColorPicker,
};
// /{ visible, setVisible, updateForm }
export const ColorPickModal = () => {
  const [visible, setVisible] = useState(true);
  const { updateCard } = useCard();

  return (
    <CardColorPicker
      visible={true}
      closeModal={() => {
        setVisible(false);
      }}
      onChangeCardName={updateCard}
    />
  );
};
