export const isEmpty = (value) => value === '';

export const isAllEmpty = (values) => values.every(isEmpty);
