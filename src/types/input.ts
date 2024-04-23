export interface InputType {
  inputLabel: string;
  inputInfo: InputInfo[];
}

export interface InputInfo {
  property: string;
  validateType: string;
  maxLength: number;
  placeHolder: string;
  type?: string;
}
