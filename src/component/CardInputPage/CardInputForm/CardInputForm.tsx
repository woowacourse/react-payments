import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { useState } from "react";

const initialFormCondition = {
  cardNumber: true,
  ExpirationDate: true,
  Owner: true,
  SecurityCode: true,
  Password: true,
};

export default function CardInputForm() {
  const [isFormFilled, setIsFormFilled] = useState(initialFormCondition);

  const isFormComplete = Object.values(isFormFilled).every(Boolean);
  console.log(isFormFilled, isFormComplete);

  // formelement.addEventListner('submit', (e) => {
  //     e.preventDefault();
  //     formdata
  //     validation 다 입력됐는지 확인해서
  //     다 입력됐으면 setCardState(
  //     아니면 return
  //     )

  // })

  return (
    <form>
      <CardPreview card={{}} />
      <InputBoxCardNumber />
      <InputBoxExpirationDate />
      <InputBoxOwner />
      <InputBoxSecurityCode />
      <InputBoxPassword />
      {isFormComplete && <Button type="submit">다음</Button>}
    </form>
  );
}
