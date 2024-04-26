import React from "react";

export const sliceOverMaxLength = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value.length > e.target.maxLength)
    e.target.value = e.target.value.slice(0, e.target.maxLength);
};
