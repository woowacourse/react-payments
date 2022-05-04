import { useState } from "react";
import ConfirmAdd from ".";

export default {
  title: "ConfirmAdd",
  component: ConfirmAdd,
};
const initState = {
  cardNumber: ["1234", "5678", "1111", "1111"],
  expiredDate: ["", ""],
  ownerName: "KIM SANG ROK",
  secureCode: "",
  password: ["", ""],
  cardName: "록1바",
  color: "#d2d2d2",
};
export const ConfirmAddComponent = () => {
  const [visible, setVisible] = useState(true);
  return (
    visible && (
      <ConfirmAdd
        closeModal={() => {
          setVisible(false);
        }}
        cardInfo={initState}
      />
    )
  );
};
