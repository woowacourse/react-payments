import React, { useState, useEffect } from "react";

import CardNumberInput from "./CardNumberInput";
import CardDateInput from "./CardDateInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
import CardCVCInput from "./CardCVCInput";
import CardPasswordInput from "./CardPasswordInput";

import St from "./styled";

function CardDetailForm() {
  return (
    <St.Form>
      <CardNumberInput />
      <CardDateInput />
      <CardOwnerNameInput />
      <CardCVCInput />
      <CardPasswordInput />
      <St.SubmitButton type="submit" value={"다음"} />
    </St.Form>
  );
}

export default CardDetailForm;
