import { CARD_OWNERNAME_KEY } from "@/constants/cardInfo";
import { ERRORS } from "@/constants/messages";
import { isEnglishCharacter } from "@/utils/validators";
import { ChangeEvent, FocusEvent, useState } from "react";

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

  const changeOwnerName = (event: ChangeEvent<HTMLInputElement>) => {
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
  };

  const blurOwnerName = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target as {
      name: (typeof CARD_OWNERNAME_KEY)[number];
      value: string;
    };
    if (!CARD_OWNERNAME_KEY.includes(name)) return;

    setOwnerName({
      data: {
        ownerName: { value: value.trim(), isError: false, isDone: true },
      },
      status: {
        isError: false,
        errorMessage: "",
      },
    });
  };

  return {
    ownerName,
    changeOwnerName,
    blurOwnerName,
  };
};

export default useOwnerName;
