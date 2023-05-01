import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardNumberFormat, PasswordFormat } from "../types";
import {
  checkEnglishFormat,
  checkExpirationDateFormat,
  checkNumberFormat,
} from "../utils/formatChecker";
import { formatEnglishCapitalization } from "../utils/formatter";

const useCardForm = (addCard: Dispatch<SetStateAction<Card[]>>) => {
  const [cardInformation, setCardInformation] = useState<Card>({
    cardNumber: ["", "", "", ""],
    expirationDate: {
      month: "",
      year: "",
    },
    ownerName: "",
    securityCode: "",
    password: ["", ""],
  });

  const navigate = useNavigate();

  const onCardNumberChange = ({
    target: { value, dataset },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!checkNumberFormat(value)) return;

    const index = Number(dataset.index);

    setCardInformation((information) => {
      const cardNumber: CardNumberFormat = [...information.cardNumber];
      cardNumber[index] = value;

      return {
        ...information,
        cardNumber,
      };
    });
  };

  const onOwnerNameChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!checkEnglishFormat(value)) return;

    const ownerName = formatEnglishCapitalization(value);

    setCardInformation((information) => {
      return {
        ...information,
        ownerName,
      };
    });
  };

  const onExpirationDateChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!checkExpirationDateFormat(value)) return;

    setCardInformation((information) => {
      const [month, year] = value.split("/");

      return {
        ...information,
        expirationDate: {
          month,
          year,
        },
      };
    });
  };

  const onSecurityCodeChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!checkNumberFormat(value)) return;

    setCardInformation((information) => {
      return {
        ...information,
        securityCode: value,
      };
    });
  };

  const onPasswordChange = ({
    target: { value, dataset },
  }: ChangeEvent<HTMLInputElement>) => {
    if (!checkNumberFormat(value)) return;

    const index = Number(dataset.index);

    setCardInformation((information) => {
      const password: PasswordFormat = [...information.password];
      password[index] = value;

      return {
        ...information,
        password,
      };
    });
  };

  const onCardInformationSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addCard((cardList) => {
      return [...cardList, cardInformation];
    });
    navigate("/");
  };

  return {
    cardInformation,
    onCardNumberChange,
    onOwnerNameChange,
    onExpirationDateChange,
    onSecurityCodeChange,
    onPasswordChange,
    onCardInformationSubmit,
  };
};

export { useCardForm };
