import { ChangeEvent } from "react";
import { ISetPayload, ISetPayloadWithType } from "../types/cardInfoState";

export default function useUpdateHandler(
  dispatch: React.Dispatch<any>,
  setCallback: <T>(payload: T) => {
    type: string;
    payload: T;
  },
  inValidCallback: (value: string) => boolean
) {
  const updateHandler = (
    event: ChangeEvent<HTMLInputElement>,
    type?: string
  ) => {
    const { value } = event.target;
    if (inValidCallback(value)) return;
    if (type) {
      dispatch(setCallback<ISetPayloadWithType>({ value, type }));

      return;
    }

    dispatch(setCallback<ISetPayload>({ value }));
  };

  return { updateHandler };
}
