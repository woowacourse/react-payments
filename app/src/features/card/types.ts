import type React from "react";

export type CardNumber = {
  firstDigits: string;
  secondDigits: string;
  thirdDigits: string;
  fourthDigits: string;
};


export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
