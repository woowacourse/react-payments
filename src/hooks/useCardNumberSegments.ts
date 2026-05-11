import { useState } from "react";
import { getCardBrand } from "../utils/getCardBrand";
import { CARD_BRAND_CONFIGS, DEFAULT_SEGMENT_LENGTHS } from "../types";

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
    const newBrand = getCardBrand(newSegments);
    const currentBrand = getCardBrand(segments);
    const fullNumber = newSegments.join("");
    const alreadySplit = segments.length > 1;

    if (!alreadySplit && fullNumber.length < 4) {
      setSegments([fullNumber]);
      return;
    }

    if (!alreadySplit || newBrand !== currentBrand) {
      const segmentLengths = newBrand
        ? CARD_BRAND_CONFIGS[newBrand].segmentLengths
        : DEFAULT_SEGMENT_LENGTHS;
      setSegments(splitIntoSegments(fullNumber, segmentLengths));
      return;
    }

    setSegments(newSegments);
  };

  return { segments, brand, handleChange };
}
