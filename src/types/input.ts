export interface InputType {
  inputLabel: string;
  inputInfo: InputInfo[];
}

export interface InputInfo {
  property: string;
  validateType: string;
  maxLength: number;
  minLength: number;
  placeHolder: string;
  type?: string;
}
