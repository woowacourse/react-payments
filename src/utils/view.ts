import React from "react";

export const sliceOverMaxLength = (
  e: React.ChangeEvent<HTMLInputElement>,
  maxLength: number
) => {
  if (e.target.value.length > 2)
    e.target.value = e.target.value.slice(0, maxLength);
};

export const changeValueToUpperCase = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  e.target.value = e.target.value.toUpperCase();
};

export const sliceInvalidValueWithRegex = (
  e: React.ChangeEvent<HTMLInputElement>,
  regex: RegExp
) => {
  if (!regex.test(e.target.value)) {
    e.target.value = e.target.value.slice(0, -1);
  }
};
