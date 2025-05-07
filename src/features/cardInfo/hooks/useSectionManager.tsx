import { useState } from 'react';
import {
  CardInfoType,
  SECTION_ORDER,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';

export function useSectionManager() {
  const [currentSection, setCurrentSection] = useState<CardInfoType>(CardInfoType.NUMBER);

  const [completedSections, setCompletedSections] = useState<Record<CardInfoType, boolean>>({
    [CardInfoType.NUMBER]: false,
    [CardInfoType.COMPANY]: false,
    [CardInfoType.EXPDATE]: false,
    [CardInfoType.CVC]: false,
    [CardInfoType.PASSWORD]: false,
  });

  const getSectionState = (sectionType: CardInfoType) => ({
    isCompleted: completedSections[sectionType],
    setCompleted: (isCompleted: boolean) => setSectionState(sectionType, isCompleted),
  });

  const setSectionState = (sectionType: CardInfoType, state: boolean) => {
    setCompletedSections((prev) => ({
      ...prev,
      [sectionType]: state,
    }));
  };

  const completeSection = (sectionType: CardInfoType) => {
    setSectionState(sectionType, true);

    const currentSectionIndex = SECTION_ORDER.indexOf(sectionType);
    if (currentSectionIndex === SECTION_ORDER.length - 1) return;

    const nextSection = SECTION_ORDER[currentSectionIndex + 1];

    if (
      !completedSections[nextSection] &&
      SECTION_ORDER.indexOf(currentSection) <= currentSectionIndex
    ) {
      setCurrentSection(nextSection);
    }
  };

  const isAllSectionsCompleted = Object.values(completedSections).every((completed) => completed);

  return {
    currentSection,
    isAllSectionsCompleted,
    getSectionState,
    completeSection,
  };
}
