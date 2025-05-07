import CardInfo from '../../../entities/cardInfo/types/CardInfo';
import { CardInfoType } from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { useCardNumber } from './useCardNumber';
import { useCardCompany } from './useCardCompany';
import { useCardExpDate } from './useCardExpDate';
import { useCardCVC } from './useCardCVC';
import { useCardPassword } from './useCardPassword';
import { useSectionManager } from './useSectionManager';
import { useErrorHandler } from './useErrorHandler';

export default function useCardInfo() {
  const { currentSection, isAllSectionsCompleted, getSectionState, completeSection } =
    useSectionManager();

  const { error, getErrorState } = useErrorHandler();

  const { cardNumber, changeCardNumber } = useCardNumber({
    sectionState: getSectionState(CardInfoType.NUMBER),
    sectionNavigation: { completeSection },
    errorState: getErrorState(),
  });

  const { cardCompany, changeCardCompany } = useCardCompany({
    sectionState: getSectionState(CardInfoType.COMPANY),
    sectionNavigation: { completeSection },
  });

  const { cardExpirationDate, changeCardExpDate } = useCardExpDate({
    sectionState: getSectionState(CardInfoType.EXPDATE),
    sectionNavigation: { completeSection },
    errorState: getErrorState(),
  });

  const { cardCVC, changeCardCVC } = useCardCVC({
    sectionState: getSectionState(CardInfoType.CVC),
    sectionNavigation: { completeSection },
    errorState: getErrorState(),
  });

  const { cardPassword, changeCardPassword } = useCardPassword({
    sectionState: getSectionState(CardInfoType.PASSWORD),
    sectionNavigation: { completeSection },
    errorState: getErrorState(),
  });

  const cardInfo: CardInfo = {
    [CardInfoType.NUMBER]: cardNumber,
    [CardInfoType.COMPANY]: cardCompany,
    [CardInfoType.EXPDATE]: cardExpirationDate,
    [CardInfoType.CVC]: cardCVC,
    [CardInfoType.PASSWORD]: cardPassword,
  };

  const handleCardInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith(CardInfoType.NUMBER)) {
      const index = Number(name[name.length - 1]);
      changeCardNumber(index, value);
      return;
    }

    if (name === CardInfoType.COMPANY) {
      changeCardCompany(value);
      return;
    }

    if (name.startsWith(CardInfoType.EXPDATE)) {
      const key = name.split('-')[1] as 'month' | 'year';
      changeCardExpDate(key, value);
      return;
    }

    if (name.startsWith(CardInfoType.CVC)) {
      changeCardCVC(value);
      return;
    }

    if (name.startsWith(CardInfoType.PASSWORD)) {
      changeCardPassword(value);
      return;
    }
  };

  return {
    cardInfo,
    handleCardInfo,
    error,
    currentSection,
    isAllSectionsCompleted,
  };
}
