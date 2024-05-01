import { UseInputReturn } from '../hooks/useInput';

export const getFirstValidateMessage = (
  CardInformationObjects: UseInputReturn[]
) => {
  return CardInformationObjects.map((obj) => {
    return obj.validateMessage;
  }).find((msg) => msg !== "");
};
