import { CardNumberPosition } from "./../../../types/index.types";
import { useMemo } from "react";
import { getIdentifyFns } from "../domains/CardPreview.domain";
import { INITIALIZE_VALUE } from "../../../shared/constants/constant";

export default function useLogoSrc(
  cardNumber: Record<CardNumberPosition, string>
) {
  const logoSrc = useMemo(() => {
    const id = cardNumber.first.slice(0, 2);
    const identifyFns = getIdentifyFns(id);
    const identifiedLogoSrc = identifyFns.find((fn) => fn.identify());
    return identifiedLogoSrc?.logoSrc ?? INITIALIZE_VALUE;
  }, [cardNumber]);

  return { logoSrc };
}
