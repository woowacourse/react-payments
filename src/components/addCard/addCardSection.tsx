import { useContext } from "react";
import {
  BankContext,
  DateContext,
  NameContext,
  NumberContext,
} from "../../contexts/cardInfo";
import { bank } from "../../core/bank";
import { AddCardForm } from "./addCardForm";
import { BankMenu } from "../bankModal/bankMenu";
import { Card } from "../@common/card/card";
import { ModalBackDrop } from "../@common/modal/modalBackDrop";
import { ModalBox } from "../@common/modal/modalBox";
import { ModalContent } from "../@common/modal/modalContent";
import { ModalTrigger } from "../@common/modal/modalTrigger";

export function AddCardSection() {
  const { cardNumber } = useContext(NumberContext);
  const { month, year } = useContext(DateContext);
  const { userName } = useContext(NameContext);
  const { selectedId, selectId } = useContext(BankContext);

  return (
    <>
      <Card
        cardNumber={cardNumber}
        month={month}
        year={year}
        userName={userName}
        cardColor={{
          bgColor: bank[selectedId]?.color,
          fontColor: bank[selectedId]?.font,
        }}
        bank={bank[selectedId]?.logoName}
      />
      <AddCardForm />
      <ModalBox defaultOpen>
        <ModalTrigger />
        <ModalBackDrop />
        <ModalContent>
          <BankMenu selectId={selectId} />
        </ModalContent>
      </ModalBox>
    </>
  );
}
