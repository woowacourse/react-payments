import { CARD_BRAND } from "@/constants/cardInfo";
import { Brand } from "@/types/card";

export const getCardbrand = (firstCardNumber: string): Brand => {
  const { visa, master } = CARD_BRAND;

  if (firstCardNumber.startsWith(visa.startNumber.toString())) return "visa";

  if (
    Number(firstCardNumber.slice(0, 2)) >= master.startNumber &&
    Number(firstCardNumber.slice(0, 2)) <= master.endNumber
  )
    return "master";

  return null;
};

export const getPreviewData = (
  inputState: Record<
    string,
    { value: string; isError: boolean; isDone: boolean }
  >
) => {
  const object: { [key: string]: string } = {};
  for (const [key, { value, isDone }] of Object.entries(inputState)) {
    object[key] = isDone ? value : "";
  }
  return object;
};
