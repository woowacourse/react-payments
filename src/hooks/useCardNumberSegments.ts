import { useState } from "react";
import { getCardBrand } from "../utils/getCardBrand";
import { CARD_BRAND_CONFIGS } from "../types";

function splitIntoSegments(fullNumber: string, lengths: number[]): string[] {
  const segments: string[] = [];
  let pos = 0;
  for (const len of lengths) {
    segments.push(fullNumber.slice(pos, pos + len));
    pos += len;
  }
  return segments;
}

export function useCardNumberSegments() {
  const [segments, setSegments] = useState<string[]>([""]);

  const brand = getCardBrand(segments);

  const handleChange = (newSegments: string[]) => {
    const alreadySplit = segments.length > 1;

    if (alreadySplit) {
      setSegments(newSegments);
      return;
    }

    const fullNumber = newSegments.join("");

    if (fullNumber.length < 4) {
      setSegments([fullNumber]);
      return;
    }

    if (!brand) {
      setSegments([fullNumber]);
      return;
    }

    setSegments(splitIntoSegments(fullNumber, CARD_BRAND_CONFIGS[brand].segmentLengths));
  };

  return { segments, brand, handleChange };
}
