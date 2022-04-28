/* eslint-disable import/prefer-default-export */
export const isNumeric = (value) => !Number.isNaN(Number(value));
export const isBackspace = (event) => event.keyCode === 8;
