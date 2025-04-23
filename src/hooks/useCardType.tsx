import { useMemo } from "react";
import { CardType } from "../types/CardInformationType";

const useCardType = (input: string): CardType => {
  return useMemo(() => {
    const bin = input.slice(0, 2);

    if (input.startsWith("4")) {
      return "visa";
    } else if (/^5[1-5]/.test(bin)) {
      return "master";
    } else {
      return "none";
    }
  }, [input]);
};

export default useCardType;
