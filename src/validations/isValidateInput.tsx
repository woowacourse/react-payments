import { SectionType } from '../types/cardType';

interface isValidateInputTableType {
  number: () => boolean;
  period: () => boolean;
  owner: () => boolean;
}

const isValidateInput = (value: string, section: SectionType): boolean => {
  const isValidateInputTable: isValidateInputTableType = {
    number: () => A(),
    period: () => B(),
    owner: () => C(),
  };

  const a = isValidateInputTable[section];
  return a();
};

function A() {
  return true;
}

function B() {
  return true;
}
function C() {
  return true;
}

export default isValidateInput;
