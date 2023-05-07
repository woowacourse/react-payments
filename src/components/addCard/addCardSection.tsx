import { AddCardForm } from "./addCardForm";
import { BankMenu } from "../bankModal/bankMenu";
import { Card } from "../@common/card/card";
import { Modal } from "navrary-modal";
import { useCardInfoContext } from "../../hooks/useCardInfoContext";

export function AddCardSection() {
  const { cardNumber, month, year, userName, selectedBank, selectBank } =
    useCardInfoContext();

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
