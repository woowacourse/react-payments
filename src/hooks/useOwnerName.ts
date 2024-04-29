import { CARD_OWNERNAME_KEY } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isEnglishCharacter } from "@/utils/validators";
import { ChangeEvent, useState, useRef, useEffect, KeyboardEvent } from "react";
import useInput from "./useInput";

const useOwnerName = () => {
  const [ownerNameNextInput, setOwnerNameNextInput] = useState<boolean>(false);
  const ownerNameRef = useRef<HTMLInputElement>(null);
  const [ownerName, setOwnerNameValue, setOwnerNameIsError, setOwerNameIsDone] = useInput();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (ownerName.isDone) {
      setOwnerNameNextInput(true);
    }
  }, [ownerName.isDone]);

  const ownerNameHandleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && ownerName.value !== "") {
      setOwerNameIsDone(true);
      ownerNameRef.current?.blur();
    }
  };

  const changeOwnerName = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_OWNERNAME_KEY)[number];
      value: string;
    };
    if (!CARD_OWNERNAME_KEY.includes(name)) return;

    if (!isEnglishCharacter(value)) {
      setErrorMessage(ERRORS.isNotAlphabet);
      return;
    }
    setOwnerNameValue(value);
    setOwnerNameIsError(false);
    setErrorMessage("");
  };

  return {
    ownerName,
    errorMessage,
    changeOwnerName,
    ownerNameHandleKeyDown,
    ownerNameNextInput,
    ownerNameRef,
  };
};

export default useOwnerName;
