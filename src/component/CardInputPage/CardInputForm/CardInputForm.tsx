import { CreditCard } from "../../../type/CreditCard";
import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";
import { useCreditCardContext } from "../../../context/CreditCardContext";

import { useRef, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./cardInputForm.module.css";
import useBooleanSeriesConnection from "../../../hook/useBooleanSeriesConnection";
import { createPortal } from "react-dom";
import CardCompanySelectModal from "../CardCompanySelectModal/CardCompanySelectModal";
import { CardCompany } from "../../../type/CardCompany";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputForm(props: Props) {
  const { addNewCard } = props;

  const { 
    isAllTrue: isAllComplete,
    getSetBooleanHandler: getSetCompleteStatus
  } = useBooleanSeriesConnection(4);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { card, setCardInfo } = useCreditCardContext();

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    addNewCard({ ...card });

    navigate("/CardListPage");
  };

  const modalClickHandler = (company: CardCompany) => {
    setCardInfo({ company })
    setIsModalOpen(false);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {createPortal(
        <CardCompanySelectModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          companyClickHandler={modalClickHandler}
        />,
        document.body
      )}
      <CardPreview card={card} />
      <Button 
        type="button"
        className={styles.companySelectButton}
        onClick={() => setIsModalOpen(true)}
      >
        카드사 바꾸기
      </Button>
      <InputBoxCardNumber setIsComplete={getSetCompleteStatus(0)} />
      <InputBoxExpirationDate setIsComplete={getSetCompleteStatus(1)} />
      <InputBoxOwner />
      <InputBoxSecurityCode setIsComplete={getSetCompleteStatus(2)} />
      <InputBoxPassword setIsComplete={getSetCompleteStatus(3)} />
      {
        isAllComplete
        && <Button className={styles.nextButton} type="submit">
          다음
        </Button>
      }
    </form>
  );
}
