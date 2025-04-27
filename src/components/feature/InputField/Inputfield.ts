import { Dispatch, SetStateAction } from 'react';
import { FieldName, InputFieldType } from '../../../config/inputField';
import { CardType } from '../../../config/card';

export interface InputFieldProps<T extends InputFieldType> {
  inputValue: Record<T, string>;
  setInputValue: Dispatch<SetStateAction<Record<T, string>>>;
  cardType?: CardType;
  onComplete: (props: { isComplete: boolean; fieldName: FieldName }) => void;
}
