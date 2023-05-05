import { bank } from "../../core/bank";
import { AddCardForm } from "./addCardForm";
import { BankMenu } from "../bankModal/bankMenu";
import { Card } from "../@common/card/card";
import { ModalBackDrop } from "../@common/modal/modalBackDrop";
import { Modal, ModalBox } from "../@common/modal/modalBox";
import { ModalContent } from "../@common/modal/modalContent";
import { ModalTrigger } from "../@common/modal/modalTrigger";
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
