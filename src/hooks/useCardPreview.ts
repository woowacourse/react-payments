import { useState } from "react";

export default function useCardPreview() {
  const [isCardFrontView, setIsCardFrontView] = useState(true);

  function flipCard() {
    setIsCardFrontView(!isCardFrontView);
  }

  function showCardFront() {
    setIsCardFrontView(true);
  }

  function showCardBack() {
    setIsCardFrontView(false);
  }

  return { isCardFrontView, flipCard, showCardFront, showCardBack };
}
