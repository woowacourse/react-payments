import { AddCardForm } from "./addCardForm";
import { BankMenu } from "../bankModal/bankMenu";
import { Card } from "../@common/card/card";
import { Modal } from "navrary-modal";
import { useCardNumber } from "../../hooks/useCardNumber";
import { useCardDate } from "../../hooks/useCardDate";
import { useUserName } from "../../hooks/useUserName";
import { useCardBank } from "../../hooks/useCardBank";

export function AddCardSection() {
  const { cardNumber } = useCardNumber();
  const { month, year } = useCardDate();
  const { userName } = useUserName();
  const { selectedBank, selectBank } = useCardBank();

  return (
    <>
      <Card
        cardNumber={cardNumber}
        month={month}
        year={year}
        userName={userName}
        cardColor={{
          bgColor: selectedBank?.color,
          fontColor: selectedBank?.font,
        }}
        bank={selectedBank?.logoName}
      />
      <AddCardForm />
      <Modal defaultOpen>
        <Modal.Trigger />
        <Modal.Backdrop />
        <Modal.Content>
          <BankMenu selectBank={selectBank} />
        </Modal.Content>
      </Modal>
    </>
  );
}
