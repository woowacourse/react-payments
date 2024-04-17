import { useState } from "react";

import { visaCard, masterCard } from "../assets/image";

const cardImages = {
  visa: visaCard,
  master: masterCard,
} as const;

type CardLogo = keyof typeof cardImages;

const useCardLogo = () => {
  const [cardLogo, setLogoImagePath] = useState<CardLogo | null>(null);

  const handleCardLogo = (firstPart: string): void => {
    if (firstPart[0] !== "4") {
      setLogoImagePath(null);
      return;
    }

    if (firstPart[0] === "4") {
      setLogoImagePath("visa");
      return;
    }

    if (firstPart.length < 2) return;

    const slicedFirstPart = parseInt(firstPart.slice(0, 2), 10);

    if (slicedFirstPart >= 51 && slicedFirstPart <= 55) {
      setLogoImagePath("master");
    }
  };

  return {
    logoPath: cardLogo ? cardImages[cardLogo] : null,
    handleCardLogo,
  };
};

export default useCardLogo;
