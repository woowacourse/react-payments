import { CARD_OWNERNAME_KEY } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isAllDone } from "@/utils/input";
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
    data: {
      ownerName: { value: "", isError: false, isDone: false },
    },
    status: {
      isError: false,
      errorMessage: "",
    },
  });

  const [nextInput, setShowNextInput] = useState<boolean>(false);
  const ownerNameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAllDone(ownerName.data)) {
      setShowNextInput(true);
    }
  }, [ownerName.data]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setOwnerName({
        data: {
          ownerName: {
            value: ownerName.data.ownerName.value,
            isError: false,
            isDone: true,
          },
        },
        status: {
          isError: false,
          errorMessage: "",
        },
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
          data: {
            ownerName: {
              value: ownerName.data.ownerName.value,
              isError: true,
              isDone: false,
            },
          },
          status: {
            isError: true,
            errorMessage: ERRORS.isNotAlphabet,
          },
        });
        return;
      }

      setOwnerName({
        data: { ownerName: { value, isError: false, isDone: false } },
        status: {
          isError: false,
          errorMessage: "",
        },
      });
    },
    [ownerName]
  );

  return {
    ownerName,
    changeOwnerName,
    handleKeyDown,
    nextInput,
    refs: { ownerNameRef },
  };
};

export default useOwnerName;
