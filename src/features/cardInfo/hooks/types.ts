import { CardInfoType } from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { ErrorKey } from '../../../entities/cardInfo/constants/cardErrorConstants';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';

export interface SectionState {
  isCompleted: boolean;
  setCompleted: (isCompleted: boolean) => void;
}

export interface SectionNavigation {
  completeSection: (sectionType: CardInfoType) => void;
}

export interface ErrorState {
  error: InputValidationResultProps;
  setError: (errorKey: ErrorKey, errorValue: any) => void;
}

export interface UseCardInfosProps {
  sectionState: SectionState;
  sectionNavigation: SectionNavigation;
  errorState: ErrorState;
}
