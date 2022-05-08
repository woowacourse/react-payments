import React, { useContext } from "react";

import Card from "../common/Card";
import CardNameForm from "../components/CardNameForm";
import { Context } from "../contexts/store";

export default function ConfirmEditCard() {
  const [state, dispatch] = useContext(Context);

  return (
    <div className="flex-column-center h-100">
      <div className="confirm-add-card-message mt-30">카드 수정이 완료되었습니다.</div>
      <Card cardInfo={state} size="big" />
      <CardNameForm mode="edit" />
    </div>
  );
}
