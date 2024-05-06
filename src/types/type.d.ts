type ButtonSize = 'full' | 'l' | 'm' | 's';

type CardState = 'front' | 'back';

type CardBrand = 'Visa' | 'MasterCard' | 'none';

type CardCompany = keyof COMPANY_TABLE;

type InputStates = InputState[];

interface InputState {
  hasError: boolean;
  hasFocus: boolean;
}

interface CardAnimationProps {
  left: number;
  top: number;
  centerX: number;
  centerY: number;
  distance: number;
}
