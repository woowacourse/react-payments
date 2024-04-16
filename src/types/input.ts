export interface inputType {
  inputLabel: string;
  inputInfo: inputInfo[];
}

interface inputInfo {
  validateType: string;
  maxLength: number;
  placeHolder: string;
}
