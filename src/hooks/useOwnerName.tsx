import { CARD_OWNERNAME_KEY } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isEnglishCharacter } from "@/utils/validators";
import {
  ChangeEvent,
  useState,
  useCallback,
  useRef,
  useEffect,
  KeyboardEvent,
} from "react";

const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState({
    value: "",
    isError: false,
    isDone: false,
    errorMessage: "",
  });

  const [ownerNameNextInput, setOwnerNameNextInput] = useState<boolean>(false);
  const ownerNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ownerName.isDone) {
      setOwnerNameNextInput(true);
    }
  }, [ownerName.isDone]);

  const ownerNameHandleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && ownerName.value !== "") {
      setOwnerName({
        ...ownerName,
        isDone: true,
      });
      ownerNameRef.current?.blur();
    }
  };

  const changeOwnerName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target as {
        name: (typeof CARD_OWNERNAME_KEY)[number];
        value: string;
      };
      if (!CARD_OWNERNAME_KEY.includes(name)) return;

      if (!isEnglishCharacter(value)) {
        setOwnerName({
          ...ownerName,
          isError: true,
          errorMessage: ERRORS.isNotAlphabet,
        });
        return;
      }
      setOwnerName({
        ...ownerName,
        value,
        isError: false,
        errorMessage: "",
      });
    },
    [ownerName]
  );

  return {
    ownerName,
    changeOwnerName,
    ownerNameHandleKeyDown,
    ownerNameNextInput,
    ownerNameRef,
  };
};

export default useOwnerName;
