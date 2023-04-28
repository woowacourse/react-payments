import { CreditCard } from "../../../type/CreditCard";
import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";
import { useCreditCardContext } from "../../../context/CreditCardContext";

import { useRef, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./cardInputForm.module.css";
import useBooleanSeriesConnection from "../../../hook/useBooleanSeriesConnection";

interface Props {
  addNewCard: (card: CreditCard) => void;
}

export default function CardInputForm(props: Props) {
  const { addNewCard } = props;

  const { 
    isAllTrue: isAllComplete,
    getSetBooleanHandler: getSetCompleteStatus
  } = useBooleanSeriesConnection(4);

  const { card } = useCreditCardContext();

  const navigate = useNavigate();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    addNewCard({ ...card });

    navigate("/CardListPage");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <CardPreview card={card} />
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
