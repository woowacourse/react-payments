import React from "react";

import Card from "../components/Card";
import CardNameForm from "../components/CardNameForm";

export default function ConfirmAddCard() {
  return (
    <div className="flex-column-center h-100">
      <div className="confirm-add-card-message mt-30">카드 등록이 완료되었습니다.</div>
      <Card size="big" />
      <CardNameForm />
    </div>
  );
}
