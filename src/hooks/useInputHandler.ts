import { useContext, useState } from "react";
import { CardInfoDispatchContext } from "components/context/CardInfoProvider";

import type {
  CardCode,
  CardCompany,
  CardDate,
  CardInfoActionType,
  CardNumbers,
  Owner,
  Password,
  Validator,
} from "types";

interface UseInputHandlerArgs {
  type: CardInfoActionType;
  key:
    | "cardCompany"
    | "cardNumbers"
    | "cardDate"
    | "owner"
    | "cardCode"
    | "pwd";
  prevData: CardCompany | CardNumbers | CardDate | Owner | CardCode | Password;
}

interface UpdateInputStateArgs {
  name: string;
  value: string;
}

function useInputHandler(
  validator: Validator,
  { type, key, prevData }: UseInputHandlerArgs
) {
  const cardInfoDispatch = useContext(CardInfoDispatchContext);
  const [errorMessage, setErrorMessage] = useState("");

  const updateInputState = ({ name, value }: UpdateInputStateArgs) => {
    setErrorMessage("");

    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    cardInfoDispatch({
      type,
      [key]: {
        ...prevData,
        [name]: value,
      },
    });
  };

  return { errorMessage, setErrorMessage, updateInputState };
}

export default useInputHandler;
