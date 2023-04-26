import Button from "../../common/Button";
import CardPreview from "../../common/CardPreview";
import InputBoxCardNumber from "../InputBoxCardNumber/InputBoxCardNumber";
import InputBoxExpirationDate from "../InputBoxExpirationDate/InputBoxExpirationDate";
import InputBoxOwner from "../InputBoxOwner/InputBoxOwner";
import InputBoxPassword from "../InputBoxPassword/InputBoxPassword";
import InputBoxSecurityCode from "../InputBoxSecurityCode/InputBoxSecurityCode";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./cardInputForm.css";
import { CreditCard, InputStatus } from "../../../type";
import { EachUserInputState } from "../../../type";

interface CardInputFormProps {
  addNewCard: (card: CreditCard) => void;
}

const initialCard: CreditCard = {
  owner: "",
  expirationDate: "",
  bank: "",
  cardNumber: [],
  securityCode: "",
  password: [],
};

const initialArrayInputState: EachUserInputState = {
  isComplete: false,
  userInput: [],
};
const initialStringInputState: EachUserInputState = {
  isComplete: false,
  userInput: "",
};

const initialInputStatus = {
  cardNumber: initialArrayInputState,
  expirationDate: initialStringInputState,
  owner: initialStringInputState,
  securityCode: initialStringInputState,
  password: initialArrayInputState,
};

export default function CardInputForm(props: CardInputFormProps) {
  const { addNewCard } = props;

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [inputStatus, setInputStatus] =
    useState<InputStatus>(initialInputStatus);

  const [nowCardInfo, setNowCardInfo] = useState<CreditCard>(initialCard);
  const navigate = useNavigate();

  const changeInputStatus = (inputName: keyof InputStatus) => {
    return (key: keyof EachUserInputState, value: any, index?: number) => {
      setInputStatus((currentInputStatus) => {
        const updateResult = JSON.parse(JSON.stringify(currentInputStatus));

        if (key === "isComplete") {
          updateResult[inputName][key] = value;
          return updateResult;
        }

        const originNowCard = JSON.parse(JSON.stringify(nowCardInfo));

        if (
          (inputName === "cardNumber" || inputName === "password") &&
          index !== undefined
        ) {
          updateResult[inputName][key][index] = value;
          originNowCard[inputName][index] = value;
          setNowCardInfo(originNowCard);
          return updateResult;
        }

        updateResult[inputName][key] = value;
        originNowCard[inputName] = value;
        setNowCardInfo(originNowCard);

        return updateResult;
      });
    };
  };

  useEffect(() => {
    const { cardNumber, expirationDate, securityCode, password } = inputStatus;
    setIsFormFilled(
      cardNumber.isComplete &&
        expirationDate.isComplete &&
        securityCode.isComplete &&
        password.isComplete
    );
  }, [inputStatus]);

  const submitCardInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFormFilled) {
      addNewCard(nowCardInfo);
      navigate("/CardListPage");
    }
  };

  return (
    <form onSubmit={(e) => submitCardInfo(e)} className="form">
      <CardPreview card={nowCardInfo} />
      <InputBoxCardNumber
        changeCardNumberStatus={changeInputStatus("cardNumber")}
      />
      <InputBoxExpirationDate
        changeCardExpirationDateStatus={changeInputStatus("expirationDate")}
      />
      <InputBoxOwner changeCardOwnerStatus={changeInputStatus("owner")} />
      <InputBoxSecurityCode
        changeSecurityCodeStatus={changeInputStatus("securityCode")}
      />
      <InputBoxPassword changePasswordStatus={changeInputStatus("password")} />
      <Button type="submit" style={isFormFilled ? {} : { color: "lightgrey" }}>
        다음
      </Button>
    </form>
  );
}
